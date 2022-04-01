<template>
  <div class="personal-info-edit-page">
    <nav-bar>
      <div slot="left"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <van-button type="default" slot="right" :disabled="isCanSubmit"
        >提交</van-button
      >
    </nav-bar>
    <div v-if="isCurrentEdit == 'name'">
      <van-field
        v-model="info.name"
        clearable
        placeholder="起个有特点的名字吧"
        ref="name"
        @change="onChange"
      />
    </div>
    <div v-if="isCurrentEdit == 'intro'">
      <van-field
        v-model="info.intro"
        rows="3"
        autosize
        type="textarea"
        maxlength="70"
        placeholder="添加简介，让大家更好的认识你"
        show-word-limit
        ref="intro"
        @change="onChange"
      />
    </div>
    <div v-if="isCurrentEdit == 'phone'">
      <van-field label="原手机号" :value="info.phone" readonly />
      <van-field
        v-model="newPhone"
        label="新手机号"
        type="tel"
        placeholder="输入手机号"
        ref="newPhone"
        @change="onChange"
      >
        <template #button>
          <van-button
            size="normal"
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
        label="验证码"
        placeholder="请输入短信验证码"
      >
      </van-field>
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import { userUpdate } from "services/profile";
import { captchas } from "services/login";
export default {
  name: "personalInfoEdit",
  data() {
    return {
      isCurrentEdit: "name",
      info: {
        name: "",
        intro: "",
        phone: "11",
      },
      newPhone: "",
      sms: "",
      tip: "发送验证码",
      time: 60,
      timer: null,
      disabled: false,
      isCanSubmit: false,
    };
  },
  created() {
    console.log(this.$route);
    this.isCurrentEdit = this.$route.query.name;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.info = userInfo;
  },
  computed: {
    title() {
      switch (this.isCurrentEdit) {
        case "name":
          return "用户名";
        case "phone":
          return "手机号";
        case "intro":
          return "个人简介";
        default:
          return this.$route.meta.title;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      switch (this.isCurrentEdit) {
        case "name":
          this.$refs.name.focus();
          break;
        case "phone":
          this.$refs.newPhone.focus();
          break;
        case "intro":
          this.$refs.intro.focus();
          break;
        default:
          break;
      }
    });
  },
  methods: {
    onChange() {
      this.isCanSubmit = true;
    },
    sendSms() {
      this.tip = "发送中...";
      this.disabled = true;
      captchas(this.newPhone).then((res) => {
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
    userUpdate() {
      const params = {};
      switch (this.isCurrentEdit) {
        case "name":
          params.name = this.info.name;
          break;
        case "phone":
          params.phone = this.newPhone;
          params.captcha = this.sms;
          break;
        case "intro":
          params.intro = this.info.intro;
          break;
      }
      userUpdate(JSON.stringify(params)).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          // 修改成功
          const userInfo = localStorage.getItem("userInfo");
          switch (this.isCurrentEdit) {
            case "name":
              userInfo.name = this.info.name;
              break;
            case "phone":
              userInfo.phone = this.newPhone;
              break;
            case "intro":
              userInfo.intro = this.info.intro;
              break;
          }
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          this.$router.goBack();
        } else {
          this.$toast(res.message);
        }
      });
    },
  },
  components: {
    NavBar,
  },
};
</script>
