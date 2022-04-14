<template>
  <div class="search-page">
    <form action="/" class="search-form">
      <van-search
        v-model="title"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <search-list :title="val" />
  </div>
</template>

<script>
import SearchList from "./SearchList.vue";
export default {
  name: "search",
  data() {
    return {
      title: "",
      val: "",
    };
  },
  methods: {
    onSearch(val) {
      this.val = val;
    },
    onCancel() {
      this.$router.go(-1);
    },
  },
  components: {
    SearchList,
  },
};
</script>
