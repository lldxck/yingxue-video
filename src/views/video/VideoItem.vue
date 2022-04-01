<template>
  <div class="video-item">
    <div class="cover-img">
      <img
        src="https://collegetest.fs-salon.cn/File/2022/1/10/1db057619b1d425c8041a2feb9db8a62_small.png"
        alt=""
      />
    </div>
    <div class="video-info">
      <div class="title">课程标题</div>
      <div class="video-uploader">
        <div class="uploader">up主名称</div>
        <div>
          <van-icon name="good-job-o" color="#2296A3" />
          <!-- <van-icon name="good-job-o" /> -->
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
    // data: {
    //   type: Object,
    //   default: {},
    // },
  },
  data() {
    return {};
  },
};
</script>
