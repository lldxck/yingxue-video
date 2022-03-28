import axios from "axios";
import router from "router";

export default function request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.1.103:9999",
    timeout: 15000,
  });

  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return err;
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            router.replace({ path: "/login" });
            console.log("未授权");
            break;
          case 403:
            router.replace({ path: "/login" });
            console.log("token过期");
            break;
          case 404:
            console.log("未定义");
            break;
          case 500:
            console.log("服务器出错啦");
            break;
          default:
            console.log("网络异常");
            break;
        }
      }
    }
  );
}
