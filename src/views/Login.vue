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
            <van-button size="small" type="default">{{ tip }}</van-button>
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
          >登录/注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      sms: "",
      tip: "发送验证码",
    };
  },
  methods: {
    login() {
      this.$router.replace({ path: "/home" });
    },
  },
};
</script>
