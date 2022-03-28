<template>
  <tab-bar>
    <tab-bar-item
      v-for="(item, index) in tabBarData"
      :key="index"
      :toPath="item.toPath"
    >
      <van-icon :name="item.icon" color="#333" slot="icon" />
      <van-icon :name="item.icon" color="pink" slot="icon-active" />
      <div slot="title">{{ item.name }}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabBar/TabBar";
import TabBarItem from "components/tabBar/TabBarItem";
export default {
  name: "bottomTabBar",
  data() {
    return {
      tabBarData: [
        { name: "首页", icon: "wap-home-o", toPath: "/home" },
        { name: "分类", icon: "apps-o", toPath: "/category" },
        { name: "我的", icon: "user-o", toPath: "/profile" },
      ],
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
