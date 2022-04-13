<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的～"
      @load="onLoad"
      v-if="list.length > 0"
    >
      <div class="video-list">
        <video-item v-for="item in list" :key="item.id" :item="item" />
      </div>
    </van-list>
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      :description="emptyDes"
      v-else
    />
  </van-pull-refresh>
</template>

<script>
import VideoItem from "./VideoItem.vue";
import { videoRecommends } from "services/video";
export default {
  name: "videoList",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      emptyDes: "暂无视频",
      pageIndex: 1,
      pageSize: 10,
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      setTimeout(async () => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        // 获取视频列表数据
        const params = {
          currentPage: this.pageIndex,
          pageSize: this.pageSize,
        };
        const res = await videoRecommends(params);
        console.log(res);
        console.log(res.data);
        const data = res.data.records;

        this.list = this.list.concat(data);
        this.pageIndex++;
        if (data.length < this.pageSize) {
          this.finished = true;
        }
        this.loading = false;
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.pageIndex = 1;
      this.onLoad();
    },
  },
  components: {
    VideoItem,
  },
};
</script>
