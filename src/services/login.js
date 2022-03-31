import request from "./request";
import api from "constants/api";
import method from "constants/method";

/**
 * 发送短信验证码
 * @param {*} phone
 * @returns
 */
export function captchas(phone) {
  return request({
    url: api.CAPTCHAS_API,
    method: method.GET,
    params: {
      phone,
    },
  });
}

/**
 * 登录
 * @param {*} params
 * @returns
 */
export function login(params) {
  return request({
    url: api.LOGIN_API,
    method: method.POST,
    data: params,
  });
}

/**
 * 退出登录
 * @returns
 */
export function loginOut() {
  return request({
    url: api.LOGINOUT_API,
    method: method.GET,
  });
}
