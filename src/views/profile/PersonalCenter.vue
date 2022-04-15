<template>
  <div class="personal-center-page">
    <nav-bar>
      <div slot="left" @click="goBack"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
    </nav-bar>
    <div class="avatar">
      <van-uploader :after-read="afterRead" :max-count="1" :deletable="false">
        <img :src="userInfo.avatar" alt="" />
        <van-icon name="photo-o" />
      </van-uploader>

      <div class="tip">点击更换头像</div>
    </div>
    <div class="info">
      <van-cell
        title="用户名"
        is-link
        :value="userInfo.name"
        @click="goEditPage('name')"
      />
      <van-cell
        title="手机号"
        is-link
        :value="userInfo.phone"
        @click="goEditPage('phone')"
      />
      <van-cell
        title="简介"
        is-link
        value="待完善"
        @click="goEditPage('intro')"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
// import { upload } from "services/public";
import { userUpdate } from "services/profile";
import client from "utils/aliOss";
import { formatTimeToStr, addTimeStamp, fileExtension } from "utils/utils";
export default {
  name: "personalCenter",
  data() {
    return {
      userInfo: {},
      fileList: [],
    };
  },
  computed: {
    title() {
      return this.$route.meta.title;
    },
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
  },
  methods: {
    goEditPage(name) {
      this.$router.push({
        path: "/infoEdit",
        query: {
          name: name,
        },
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // const formData = new FormData();
      // formData.append("file", file.file);
      // upload(formData).then((res) => {
      //   if (res.code == this.$statusCode.SUCCESS) {
      //     this.userUpdate(res.data);
      //   } else {
      //     this.$toast("上传失败");
      //   }
      // });
      // 直接上传oss
      console.log("file", file);
      const fileName = addTimeStamp(file.file.name, "_");
      const folder = fileExtension(file.file.name);
      const name = `${formatTimeToStr(
        new Date(),
        "yyyy-MM-dd"
      )}/${folder}/${fileName}`;
      client.put(name, file.file).then((res) => {
        console.log(res);
        if (res.res.statusCode == this.$statusCode.SUCCESS) {
          this.userUpdate(res.url);
        } else {
          this.$toast("上传失败");
        }
      });
    },
    userUpdate(avatar) {
      const info = { ...this.userInfo };
      info.avatar = avatar;
      userUpdate(JSON.stringify(info)).then((res) => {
        if (res.code == this.$statusCode.SUCCESS) {
          this.$toast("上传成功");
          localStorage.setItem("userInfo", JSON.stringify(res.data));
          this.$router.go(0);
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
