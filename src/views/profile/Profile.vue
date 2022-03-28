<template>
  <div class="profile-page">
    <nav-bar>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="personal">
      <img src="https://img01.yzcdn.cn/vant/apple-1.jpg" alt="" />
      <div class="info">
        <div class="tel">10000000000</div>
      </div>
      <div class="edit-btn">编辑</div>
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
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "profile",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  components: {
    NavBar,
  },
};
</script>
