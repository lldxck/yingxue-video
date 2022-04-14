<template>
  <div class="search-item">
    <div class="cover-image">
      <img :src="item.cover" alt="" />
    </div>
    <div class="info">
      <div>
        <div class="title">{{ item.title }}</div>
        <div class="intro">{{ item.intro }}才基本差不多吃的很少接触卡车陈大姐课程的卡车川大江安从</div>
      </div>

      <div class="video-category">
        <div class="category">{{ item.categoryName }}</div>
        <div>
          <van-icon name="good-job-o" />
          <span class="likes">{{ item.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>
ƒ
