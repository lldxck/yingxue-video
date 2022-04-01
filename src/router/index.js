import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Login = () => import("views/Login");
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Profile = () => import("views/profile/Profile");
const PersonalCenter = () => import("views/profile/PersonalCenter");
const PersonalInfoEdit = () => import("views/profile/PersonalInfoEdit");
const VideoPublish = () => import("views/video/VideoPublish");

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录",
      isShowTabBar: false,
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
      isShowTabBar: true,
    },
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    meta: {
      title: "分类",
      isShowTabBar: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "我的",
      isShowTabBar: true,
    },
  },
  {
    path: "/personalCenter",
    name: "personalCenter",
    component: PersonalCenter,
    meta: {
      title: "个人主页",
      isShowTabBar: false,
    },
  },
  {
    path: "/infoEdit",
    name: "personalInfoEdit",
    component: PersonalInfoEdit,
    meta: {
      title: "用户信息修改",
      isShowTabBar: false,
    },
  },
  {
    path: "/videoPublish",
    name: "videoPublish",
    component: VideoPublish,
    meta: {
      title: "发布视频",
      isShowTabBar: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
