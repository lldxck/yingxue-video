<template>
  <div class="category-page">
    <nav-bar>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="category-side">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "category",
  data() {
    return {
      activeKey: 0,
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  methods: {
    onChange(index) {
      console.log(index);
    },
  },
  components: {
    NavBar,
  },
};
</script>
