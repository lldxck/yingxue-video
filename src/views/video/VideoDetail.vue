<template>
  <div class="video-detail-page" :style="{ paddingTop: height + 'px' }">
    <div class="video-container" :style="{ height: height + 'px' }">
      <video
        id="player"
        controls
        crossorigin
        playsinline
        poster="https://bitdash-a.akamaihd.net/content/sintel/poster.png"
      ></video>
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
              <van-button color="red" icon="plus">关注</van-button>
            </div>
            <div class="play-likes">
              <span><van-icon name="play-circle-o" />播放0次</span>
              <span><van-icon name="good-job-o" />点赞0次</span>
            </div>
            <div class="operate">
              <div>
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
            <div>简介内容展示</div>
          </div>
        </van-tab>
        <van-tab title="讨论">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Plyr from "plyr";
import Hls from "hls.js";
export default {
  name: "videoDetail",
  data() {
    return {
      source: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
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
      console.log(window.innerWidth);
      return (window.innerWidth * 9) / 16;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const video = document.querySelector("video");
      const player = new Plyr(video, this.defaultOptions);

      if (!Hls.isSupported()) {
        video.src = this.source;
      } else {
        // For more Hls.js options, see https://github.com/dailymotion/hls.js
        const hls = new Hls();
        hls.loadSource(this.source);
        hls.attachMedia(video);
        window.hls = hls;

        // Handle changing captions
        player.on("languagechange", () => {
          // Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
          setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
        });
      }

      // Expose player so it can be used from the console
      window.player = player;
    },
    onClick() {},
  },
};
</script>
