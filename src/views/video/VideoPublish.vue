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
      <van-field
        v-model="currentValue"
        is-link
        readonly
        label="分类"
        placeholder="请选择类别"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-tree-select
          :items="categoryList"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="clickChild"
        />
      </van-popup>
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
      show: false,
      currentValue: "",
      activeId: 1,
      activeIndex: 0,
      categoryList: [
        { id: 1, text: "浙江", children: [{ id: 3, text: "111" }] },
        { id: 2, text: "江苏", children: [{ id: 4, text: "222" }] },
      ],
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
    clickChild(data) {
      console.log(data);
      this.currentValue = data.text;
      this.show = false;
      console.log("activeId", this.activeId);
    },
  },
  components: {
    NavBar,
  },
};
</script>
