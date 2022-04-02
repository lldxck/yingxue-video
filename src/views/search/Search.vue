<template>
  <div class="search-page">
    <form action="/" class="search-form">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <search-list />
  </div>
</template>

<script>
import SearchList from "./SearchList.vue";
export default {
  name: "search",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
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
