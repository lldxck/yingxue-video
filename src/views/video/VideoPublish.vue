<template>
  <div class="video-publish">
    <nav-bar>
      <div slot="left"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <div slot="right">
        <van-button type="default" slot="right">发布</van-button>
      </div>
    </nav-bar>
    <div></div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "videoPublish",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  methods: {},
  components: {
    NavBar,
  },
};
</script>
