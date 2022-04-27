import request from "./request";
import api from "constants/api";
import method from "constants/method";

/**
 * 获取用户信息
 * @returns
 */
export function user() {
  return request({
    url: api.USER_API,
    method: method.GET,
  });
}

/**
 * 修改用户信息
 * @param {*} params
 * @returns
 */
export function userUpdate(params) {
  return request({
    url: api.USER_UPDATE_API,
    method: method.POST,
    data: params,
  });
}

/**
 * 关注/取消关注用户
 * @param {*} id 
 * @returns 
 */
export function userFollowing(id) {
  return request({
    url: api.USER_FOLLOWING_API + id,
    method: method.GTE
  })
}

