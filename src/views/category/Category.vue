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
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <div class="category-two">
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
      <div class="item">JAVA</div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import { category } from "services/category";
export default {
  name: "category",
  data() {
    return {
      activeKey: 0,
      list: [],
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  created() {},
  methods: {
    onChange(index) {
      console.log(index);
    },
    category() {
      category().then((res) => {
        console.log(res);
        if (res.code == this.$statusCode.SUCCESS) {
          this.list = res.data;
        } else {
          this.$toast(res.message);
        }
      });
    },
  },
  components: {
    NavBar,
  },
};
</script>
