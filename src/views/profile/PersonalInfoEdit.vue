<template>
  <div class="personal-info-edit-page">
    <nav-bar>
      <div slot="left" @click="goBack"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <van-button
        type="default"
        slot="right"
        :disabled="!isCanSubmit"
        @click="submit"
        >提交</van-button
      >
    </nav-bar>
    <div v-if="isCurrentEdit == 'name'">
      <van-field
        v-model="info.name"
        clearable
        placeholder="起个有特点的名字吧"
        ref="name"
        @input="onInput($event)"
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
        @input="onInput($event)"
      />
    </div>
    <div v-if="isCurrentEdit == 'phone'">
      <van-field label="原手机号" :value="info.phone" readonly />
      <van-field
        v-model="info.newPhone"
        label="新手机号"
        type="tel"
        placeholder="输入手机号"
        ref="newPhone"
        @input="onInput($event)"
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
        v-model="info.captcha"
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
        newPhone: "",
        captcha: "",
      },
      tip: "发送验证码",
      time: 60,
      timer: null,
      disabled: false,
      isCanSubmit: false,
      isOriginUserInfo: null,
    };
  },
  created() {
    console.log(this.$route);
    this.isCurrentEdit = this.$route.query.name;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userInfo.newPhone = "";
    userInfo.captcha = "";
    this.info = { ...userInfo };
    this.isOriginUserInfo = { ...userInfo };
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
    onInput(e) {
      switch (this.isCurrentEdit) {
        case "name":
          if (this.isOriginUserInfo.name == e) {
            this.isCanSubmit = false;
          } else {
            this.isCanSubmit = true;
          }
          break;
        case "intro":
          if (this.isOriginUserInfo.intro == e) {
            this.isCanSubmit = false;
          } else {
            this.isCanSubmit = true;
          }
          break;
        default:
          this.isCanSubmit = true;
          break;
      }
    },
    sendSms() {
      this.tip = "发送中...";
      this.disabled = true;
      captchas(this.info.newPhone).then((res) => {
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
    submit() {
      userUpdate(JSON.stringify(this.info)).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          console.log(res);
          // 修改成功
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          this.$router.go(-1);
        } else {
          this.$toast(res.message);
        }
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
  },
};
</script>
