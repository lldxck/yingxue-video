<template>
  <div
    class="video-detail-page"
    :style="{ paddingTop: height + 'px' }"
    v-if="videoData"
  >
    <div class="video-container" :style="{ height: height + 'px' }">
      <video
        id="player"
        controls
        crossorigin
        playsinline
        :poster="videoData.cover"
      >
        <source :src="videoData.link" />
      </video>
    </div>

    <div>
      <van-tabs @click="onClick" sticky :offset-top="height">
        <van-tab title="简介">
          <div class="intro">
            <!-- 发布者信息 -->
            <div class="uploader-info">
              <img src="~assets/images/defaultAvatar.png" alt="" />
              <div class="info">
                <div class="phone">18500001223</div>
                <div class="time">2022-04-12 15:30:00</div>
              </div>
              <van-button color="#ee0a24" icon="plus">关注</van-button>
              <!-- <van-button color="#00b3ff" icon="plus">已关注</van-button> -->
            </div>
            <div class="play-likes">
              <span><van-icon name="play-circle-o" />播放0次</span>
              <span><van-icon name="good-job-o" />点赞0次</span>
            </div>
            <div class="operate">
              <div :class="{ active: true }">
                <van-icon name="good-job-o" />
                <p>点赞</p>
              </div>
              <div>
                <van-icon name="close" />
                <p>不喜欢</p>
              </div>
              <div>
                <van-icon name="like-o" />
                <p>收藏</p>
              </div>
              <div>
                <van-icon name="share-o" />
                <p>分享</p>
              </div>
            </div>
            <div class="intro-content">{{ videoData.intro }}</div>
          </div>
        </van-tab>
        <van-tab title="讨论">
          <video-comments />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Plyr from "plyr";
// import Hls from "hls.js";
import VideoComments from "./comments/VideoComments.vue";
import { videoDetail } from "services/video";
export default {
  name: "videoDetail",
  data() {
    return {
      id: 0,
      videoData: null,
      defaultOptions: {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "settings",
          "fullscreen",
        ],
        speed: {
          selected: 1,
          options: [1.5, 1.25, 1, 0.75, 0.5],
        },
        i18n: {
          settings: "设置",
          speed: "倍速",
          normal: "1.0x",
          quality: "分辨率",
          qualityLabel: {
            0: "自动",
          },
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
      },
    };
  },
  computed: {
    height() {
      return (window.innerWidth * 9) / 16;
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.videoInfo(this.id);
  },
  beforeDestroy() {
    window.player && window.player.destroy();
  },
  methods: {
    videoInfo(id) {
      videoDetail(id).then((res) => {
        console.log(res);
        if (res.code == this.$statusCode.SUCCESS) {
          this.videoData = res.data;
          setTimeout(() => {
            this.init();
          }, 600);
        } else {
          this.$toast(res.message);
        }
      });
    },
    init() {
      const video = document.querySelector("video");
      const player = new Plyr(video, this.defaultOptions);
      window.player = player;
    },
    onClick() {},
  },
  components: {
    VideoComments,
  },
};
</script>
