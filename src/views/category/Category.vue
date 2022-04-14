<template>
  <div class="category-page">
    <nav-bar>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="category-side">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.name"
          v-for="item in list"
          :key="item.id"
        />
      </van-sidebar>
    </div>
    <div class="category-two">
      <div
        class="item"
        v-for="item in listChild"
        :key="item.id"
        @click="categoryClick(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import { categoryList } from "services/category";
export default {
  name: "category",
  data() {
    return {
      activeKey: 0,
      list: [],
      listChild: [],
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.category(null);
      this.onChange(this.activeKey);
    },
    onChange(index) {
      console.log(index, this.list);
      const id = this.list[index].id;
      console.log("id", id);
      this.category(id);
    },
    async category(id) {
      await categoryList(id).then((res) => {
        console.log(res);
        if (res.code == this.$statusCode.SUCCESS) {
          if (id) {
            this.listChild = res.data;
          } else {
            this.list = res.data;
          }
        } else {
          this.$toast(res.message);
        }
      });
    },
    categoryClick(item) {
      console.log(item);
      this.$router.push({
        path: "/categoryList",
        query: {
          name: item.name,
          id: item.id,
        },
      });
    },
  },
  components: {
    NavBar,
  },
};
</script>
