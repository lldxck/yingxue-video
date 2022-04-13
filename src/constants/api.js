export default {
  //  公共
  CAPTCHAS_API: "/public/captchas", //发送短信验证码
  UPLOAD_API: '/public/upload',//文件上传
  // 用户
  LOGIN_API: "/user/tokens", //登录
  LOGINOUT_API: "/user/token", //注销
  USER_API: "/user/user", //用户信息
  USER_UPDATE_API: "/user/user", //修改用户信息
  // 分类
  CATEGORY_API: '/category/categories',//分类列表
  // 分类树形数据
  CATEGORY_TREE_API: '/category/tree',//分类树形数据
  // 视频
  VIDEO_API: '/videos/publish',//上传视频
  VIDEO_RECOMMENDS_API:'/videos/recommends'
};
