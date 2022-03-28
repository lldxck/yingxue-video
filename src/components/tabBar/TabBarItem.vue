<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="icon" v-if="!isActive"></slot>
    <slot name="icon-active" v-else></slot>
    <div class="title" :class="{ isActive: isActive }">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    toPath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.toPath) != -1;
    },
  },
  methods: {
    itemClick() {
      this.$router.push({ path: this.toPath });
    },
  },
};
</script>

<style></style>
