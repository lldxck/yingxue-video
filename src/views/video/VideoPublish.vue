<template>
  <div class="video-publish">
    <nav-bar>
      <div slot="left" @click="goBack"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <div slot="right">
        <van-button type="default" slot="right" @click="publish"
          >发布</van-button
        >
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
            preview-size="120px"
            @click-preview="clickPreview"
          >
            <div slot="preview-cover">
              <video :src="videoInfo.link" class="video"></video>
            </div>
          </van-uploader>
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
          :active-id.sync="videoInfo.categoryId"
          :main-active-index.sync="activeIndex"
          @click-item="clickChild"
        />
      </van-popup>
    </div>
    <van-popup v-model="videoShow">
      <div class="video-container">
        <video
          controls
          :src="videoInfo.link"
          :style="{ width: '100%' }"
        ></video></div
    ></van-popup>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
import { categoryTree } from "services/category";
import { upload } from "services/public";
import { videoPublish } from "services/video";
export default {
  name: "videoPublish",
  data() {
    return {
      maxCount: "1",
      fileList: [],
      videoInfo: {
        title: "",
        intro: "",
        link: "",
        categoryId: 1,
      },
      show: false,
      currentValue: "",

      activeIndex: 0,
      categoryList: [],
      videoShow: false,
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  created() {
    this.getCategoryData();
  },
  methods: {
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      const formData = new FormData();
      formData.append("file", file.file);
      upload(formData).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          file.status = "done";
          file.message = "上传成功";
          this.videoInfo.link = res.data;
        } else {
          this.$toast("上传失败");
          file.status = "failed";
          file.message = "上传失败";
        }
      });
    },
    clickPreview() {
      this.videoShow = true;
    },
    goBack() {
      this.$router.go(-1);
    },
    clickChild(data) {
      this.currentValue = data.text;
      this.show = false;
    },
    getCategoryData() {
      categoryTree().then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          const list = res.data.filter((item) => item.parentId == null);
          list.map((item) => {
            item.text = item.name;
            const cList = this.findChildren(item, res.data);
            item.children = cList;
          });
          this.categoryList = list;
        } else {
          this.$toast(res.message);
        }
      });
    },
    findChildren(item, data) {
      const list = data.filter((cItem) => cItem.parentId == item.id);
      list.map((cItem) => {
        cItem.text = cItem.name;
        const list = this.findChildren(cItem, data);
        cItem.children = list;
      });
      return list;
    },
    publish() {
      videoPublish(JSON.stringify(this.videoInfo)).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          this.$toast("发布成功");
          this.$router.go(-1);
        } else {
          this.$toast(res.message);
        }
      });
    },
  },
  components: {
    NavBar,
  },
};
</script>
