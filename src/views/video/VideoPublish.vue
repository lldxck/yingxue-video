<template>
  <div class="video-publish">
    <nav-bar>
      <div slot="left" @click="goBack"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <div slot="right">
        <van-button type="default" slot="right">发布</van-button>
      </div>
    </nav-bar>
    <div>
      <van-field
        v-model="videoInfo.title"
        label="标题"
        placeholder="请输入标题"
      />
      <van-field name="uploader" label="视频文件">
        <template #input>
          <van-uploader
            v-model="fileList"
            :after-read="afterRead"
            :max-count="maxCount"
            accept="video/*"
          />
        </template>
      </van-field>
      <van-field
        v-model="videoInfo.intro"
        rows="3"
        autosize
        label="简介"
        type="textarea"
        maxlength="100"
        placeholder="请输入简介"
        show-word-limit
      />
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "videoPublish",
  data() {
    return {
      maxCount: "1",
      fileList: [],
      videoInfo: {
        title: "",
        intro: "",
      },
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  methods: {
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
  },
};
</script>
