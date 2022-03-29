<template>
  <div class="personal-center-page">
    <nav-bar>
      <div slot="left"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="avatar">
      <img :src="userInfo.avatar" alt="" />
      <div class="tip">点击更换头像</div>
    </div>
    <div class="info">
      <van-cell
        title="用户名"
        is-link
        :value="userInfo.name"
        @click="goEditPage('name')"
      />
      <van-cell
        title="手机号"
        is-link
        :value="userInfo.phone"
        @click="goEditPage('phone')"
      />
      <van-cell
        title="简介"
        is-link
        value="待完善"
        @click="goEditPage('intro')"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "personalCenter",
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
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
  methods: {
    goEditPage(name) {
      this.$router.push({
        path: "/infoEdit",
        query: {
          name: name,
        },
      });
    },
  },
  components: {
    NavBar,
  },
};
</script>
