<template>
  <div class="home-page">
    <nav-bar>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div>首页</div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
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
  components: {
    NavBar,
  },
};
</script>
