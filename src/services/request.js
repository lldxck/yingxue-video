import axios from "axios";
import router from "router";
import { Toast } from 'vant'

export default function request(config) {
  const instance = axios.create({
    baseURL: "http://192.168.1.103:9999",
    timeout: 15000,
  });
  instance.defaults.headers['Content-Type'] = 'application/json'

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
      return response.data;
    },
    (err) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            router.replace({ path: "/login" });
            Toast("未授权");
            break;
          case 403:
            router.replace({ path: "/login" });
            Toast("token过期");
            break;
          case 404:
            Toast("404啦");
            break;
          case 500:
            Toast("服务器出错啦");
            break;
          default:
            Toast("网络异常");
            break;
        }
      }
    }
  );
  return instance(config)
}
