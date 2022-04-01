<template>
  <div class="profile-page">
    <nav-bar>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="personal" @click="personalCenter">
      <img :src="userInfo.avatar" alt="" />
      <div class="info">
        <div class="tel">{{ userInfo.name }}</div>
      </div>
      <div class="edit-btn">个人主页</div>
    </div>
    <div class="">
      <van-cell title="历史" is-link icon="clock-o" />
      <van-cell title="收藏" is-link icon="star-o" />
      <van-cell title="关注" is-link icon="like-o" />
      <van-cell title="消息" is-link icon="comment-o" />
      <van-cell title="缓存" is-link icon="delete-o" />
      <van-cell title="反馈" is-link icon="service-o" />
      <van-cell title="关于我们" is-link icon="friends-o" />
      <van-cell title="语言环境·自动" is-link icon="chat-o" />
      <van-cell title="隐私协议" is-link icon="orders-o" />
      <van-cell title="退出登录" is-link icon="bulb-o" @click="loginOut" />
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import { user } from "services/profile";
import { loginOut } from "services/login";
export default {
  name: "profile",
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  created() {
    this.user();
  },
  methods: {
    user() {
      user().then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          console.log(res);
          this.userInfo = res.data;
          localStorage.setItem("userInfo", JSON.stringify(res.data));
        } else {
          this.$toast(res.message);
        }
      });
    },
    personalCenter() {
      this.$router.push({ path: "/personalCenter" });
    },
    loginOut() {
      loginOut().then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          localStorage.removeItem("loginInfo");
          localStorage.removeItem("userInfo");
          this.$router.replace({ path: "/login" });
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
