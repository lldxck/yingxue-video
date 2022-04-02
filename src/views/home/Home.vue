<template>
  <div class="home-page">
    <nav-bar>
      <div slot="left" @click="search"><van-icon name="search" /></div>
      <div slot="center">{{ title }}</div>
      <div slot="right"><van-icon name="add-o" @click="publish" /></div>
    </nav-bar>
    <video-list />
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import VideoList from "views/video/VideoList";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  methods: {
    publish() {
      this.$router.push({ path: "/videoPublish" });
    },
    search() {
      this.$router.push({
        path: "/search",
      });
    },
  },
  components: {
    NavBar,
    VideoList,
  },
};
</script>
