<template>
  <div class="personal-info-edit-page">
    <nav-bar>
      <div slot="left"><van-icon name="arrow-left" /></div>
      <div slot="center">{{ title }}</div>
      <div slot="right" class="submit">提交</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/navBar/NavBar";
export default {
  name: "personalInfoEdit",
  data() {
    return {
      isCurrentEdit: "name",
    };
  },
  created() {
    console.log(this.$route);
    this.isCurrentEdit = this.$route.query.name;
  },
  computed: {
    title() {
      switch (this.isCurrentEdit) {
        case "name":
          return "用户名";
        case "phone":
          return "手机号";
        case "intro":
          return "个人简介";
        default:
          return this.$route.meta.title;
      }
    },
  },
  components: {
    NavBar,
  },
};
</script>
