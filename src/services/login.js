import request from './request'
import api from 'constants/api'
import method from 'constants/method'

export function captchas(phone) {
  return request({
    url: api.CAPTCHAS_API,
    method: method.GET,
    params: {
      phone
    }
  })
}