<template>
  <div id="app">
    <router-view />
    <bottom-tab-bar />
  </div>
</template>
<script>
import BottomTabBar from "views/BottomTabBar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    BottomTabBar,
  },
};
</script>

<style lang="less">
@import "assets/css/index.less";
</style>
