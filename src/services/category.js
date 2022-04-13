import request from './request'
import api from 'constants/api'
import method from 'constants/method'

/**
 * 查询分类数据
 * @returns 
 */
export function categoryList(id) {
  return request({
    url: api.CATEGORY_API,
    method: method.GET,
    params: {
      id
    }
  })
}

/**
 * 获取分类树形数据
 * @returns 
 */
export function categoryTree() {
  return request({
    url: api.CATEGORY_TREE_API,
    method: method.GET,

  })
}