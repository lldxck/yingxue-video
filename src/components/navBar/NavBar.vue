<template>
  <div class="nav-bar">
    <div class="left" @click="goBack"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.goBack();
    },
  },
};
</script>

<style></style>
