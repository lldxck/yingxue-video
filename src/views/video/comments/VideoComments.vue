<template>
  <div class="video-comments">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的～"
        @load="onLoad"
        v-if="list.length > 0"
      >
        <comment-item v-for="item in list" :key="item" :title="item" />
      </van-list>
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        :description="emptyDes"
        v-else
      />
    </van-pull-refresh>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  name: "videoComments",
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false,
      emptyDes: "暂无评论",
      pageIndex: 1,
      pageSize: 10,
      list: [],
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      // console.log(this.refreshing);
      // setTimeout(async () => {
      //   if (this.refreshing) {
      //     this.list = [];
      //     this.refreshing = false;
      //   }
      //   // 获取视频列表数据
      //   const params = {
      //     currentPage: this.pageIndex,
      //     pageSize: this.pageSize,
      //     name: val,
      //   };
      //   // const res = await videoComments(params);
      //   // console.log(res);
      //   // console.log(res.data);
      //   // const data = res.data.records;

      //   this.list = this.list.concat(data);
      //   this.pageIndex++;
      //   if (data.length < this.pageSize) {
      //     this.finished = true;
      //   }
      //   this.loading = false;
      // }, 1000);
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
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
    CommentItem,
  },
};
</script>
