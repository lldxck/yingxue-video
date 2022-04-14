<template>
  <div class="category-list-page">
    <nav-bar>
      <div slot="left" @click="goBack"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ name }}</div>
    </nav-bar>
    <video-list :id="id" />
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import VideoList from "views/video/VideoList";
export default {
  name: "categoryList",
  data() {
    return {
      name: "",
      id: -1,
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.id = Number(this.$route.query.id);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
    VideoList,
  },
};
</script>
