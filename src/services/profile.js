import request from './request'
import api from 'constants/api'
import method from 'constants/method'

/**
 * 获取用户信息
 * @returns 
 */
export function user() {
  return request({
    url: api.USER_API,
    method: method.GET,
  })
}