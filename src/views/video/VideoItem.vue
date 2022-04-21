<template>
  <div class="video-item" @click="videoDetail">
    <div class="cover-img">
      <img :src="item.cover" alt="" />
    </div>
    <div class="video-info">
      <div class="title">{{ item.title }}</div>
      <div class="video-uploader">
        <div class="uploader">{{ item.categoryName }}</div>
        <div>
          <van-icon name="good-job-o" color="#2296A3" />
          <span class="likes">22</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoItem",
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
  methods: {
    videoDetail() {
      this.$router.push({ path: `/videoDetail/${this.item.id}` });
    },
  },
};
</script>
