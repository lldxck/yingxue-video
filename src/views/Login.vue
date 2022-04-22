<template>
  <div class="login-page">
    <div class="login-main">
      <div>
        <van-field
          v-model="phone"
          label="+86"
          left-icon="contact"
          type="tel"
          placeholder="输入手机号"
        >
          <template #button>
            <van-button
              size="small"
              type="default"
              @click="sendSms"
              :disabled="disabled"
              >{{ tip }}</van-button
            >
          </template></van-field
        >
        <van-field
          v-model="sms"
          center
          clearable
          left-icon="comment-o"
          placeholder="请输入短信验证码"
        >
        </van-field>
      </div>
      <div class="btn">
        <van-button type="info" size="large" @click="login"
          >登录/注册111</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { captchas, login } from "services/login";
export default {
  name: "login",
  data() {
    return {
      phone: "18595736512",
      sms: "1234",
      tip: "发送验证码",
      time: 60,
      timer: null,
      disabled: false,
    };
  },
  methods: {
    login() {
      const params = {
        phone: this.phone,
        captcha: this.sms,
      };
      login(JSON.stringify(params)).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          console.log(res);
          localStorage.setItem("loginInfo", JSON.stringify(res.data));
          this.$router.replace({ path: "/home" });
        } else {
          this.$toast(res.message);
        }
      });
    },
    sendSms() {
      this.tip = "发送中...";
      this.disabled = true;
      captchas(this.phone).then((res) => {
        console.log(res);
        if (res.code == this.$statusCode.SUCCESS) {
          this.timer = setInterval(() => {
            this.time = --this.time;
            if (this.time > 0) {
              this.tip = this.time + "秒后重发";
            } else {
              this.tip = "重新发送";
              this.time = 60;
              this.disabled = false;
              clearInterval(this.timer);
            }
          }, 1000);
        } else {
          this.$toast(res.message);
          this.disabled = false;
        }
      });
    },
  },
};
</script>
