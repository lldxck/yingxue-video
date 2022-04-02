import request from './request'
import api from 'constants/api'
import method from 'constants/method'

export function category() {
  return request({
    url: api.CATEGORY_API,
    method: method.GET,
  })
}