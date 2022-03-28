import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Login = () => import("views/Login");
const Home = () => import("views/home/Home");
const Category = () => import("views/category/Category");
const Profile = () => import("views/profile/Profile");
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
      title: '登录',
      isShowTabBar: false
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
      isShowTabBar: true
    },
  },
  {
    path: "/category",
    name: "category",
    component: Category,
    meta: {
      title: "分类",
      isShowTabBar: true
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      title: "我的",
      isShowTabBar: true
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
