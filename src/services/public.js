import request from './request'
import api from 'constants/api'
import method from 'constants/method'

/**
 * 文件上传
 * @param {*} params 
 * @returns 
 */
export function upload(params) {
  return request({
    url: api.UPLOAD_API,
    method: method.POST,
    data: params,
    form: true,
  })
}
