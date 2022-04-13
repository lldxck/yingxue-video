import request from "./request";
import api from "constants/api";
import method from "../constants/method";

/**
 * 首页推荐列表
 * @param {*} params 
 * @returns 
 */
export function videoRecommends(params) {
  return request({
    url: api.VIDEO_RECOMMENDS_API,
    method: method.POST,
    data: params,
  });
}

/**
 * 发布视频
 * @param {*} params 
 * @returns 
 */
export function videoPublish(params) {
  return request({
    url: api.VIDEO_API,
    method: method.POST,
    data: params
  })
}
