<template>
  <div id="app">
    <router-view />
    <bottom-tab-bar v-show="isShowTabBar" />
  </div>
</template>
<script>
import BottomTabBar from "views/BottomTabBar";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    isShowTabBar() {
      return this.$route.meta.isShowTabBar;
    },
  },
  components: {
    BottomTabBar,
  },
};
</script>

<style lang="less">
@import "assets/css/index.less";
</style>
