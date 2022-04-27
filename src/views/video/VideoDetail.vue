<template>
  <div
    class="video-detail-page"
    :style="{ paddingTop: height + 'px' }"
    v-if="videoData"
  >
    <div class="video-back"><van-icon name="arrow-left" @click="goBack" /></div>
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
    <div></div>

    <div>
      <van-tabs sticky :offset-top="height">
        <van-tab title="简介">
          <div class="intro">
            <!-- 发布者信息 -->
            <div class="uploader-info">
              <img :src="videoData.avatar" alt="" />
              <div class="info">
                <div class="phone">{{ videoData.uploaderName }}</div>
                <div class="time">{{ videoData.following }}粉丝</div>
              </div>
              <van-button
                color="#ee0a24"
                icon="plus"
                v-if="!videoData.isFollowing"
                @click="following"
                >关注</van-button
              >
              <van-button color="#00b3ff" v-else @click="following"
                >已关注</van-button
              >
            </div>
            <div class="video-title">{{ videoData.title }}</div>
            <div class="play-likes">
              <span
                ><van-icon name="video-o" />{{ videoData.categoryName }}</span
              >
            </div>
            <div class="play-likes">
              <span
                ><van-icon name="play-circle-o" />播放{{
                  videoData.played
                }}次</span
              >
              <span><van-icon name="good-job-o" />点赞{{}}次</span>
              <span><van-icon name="clock-o" />{{ videoData.createdAt }}</span>
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
import { userFollowing } from "services/profile";
import { formatTimeToStr } from "utils/utils";
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
          res.data.createdAt = formatTimeToStr(
            res.data.createdAt,
            "yyyy-MM-dd hh:mm:ss"
          );
          res.data.updatedAt = formatTimeToStr(
            res.data.updatedAt,
            "yyyy-MM-dd hh:mm:ss"
          );
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
    goBack() {
      this.$router.go(-1);
    },
    following() {
      userFollowing(this.videoData.uid).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          this.videoData.isFollowing = !this.videoData.isFollowing;
          if (this.videoData.isFollowing) {
            this.videoData.following = this.videoData.following + 1;
            this.$toast("关注成功");
          } else {
            this.$toast("取消关注成功");
            this.videoData.following = this.videoData.following - 1;
          }
        } else {
          this.$toast(res.message);
        }
      });
    },
  },
  components: {
    VideoComments,
  },
};
</script>
