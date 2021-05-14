import {request} from '@/plugins/request' // 获取文章列表

export const getArticles = (params) => {
  return request({ method: 'GET', url: '/api/articles', params })
}
export const getFeedArticles = (params) => {
    return request({ method: 'GET', url: '/api/articles/feed', params })
  }
  export const addFavo = (params) => {
    return request({ method: 'POST', url: `/api/articles/${params}/favorite`, params })
  }
  export const cancelFavo = (params) => {
    return request({ method: 'DELETE', url: `/api/articles/${params}/favorite`, params })
  }
  export const getDetail = (params) => {
    return request({ method: 'GET', url: `/api/articles/${params}` })
  }
  export const getComments = (params) => {
    return request({ method: 'GET', url: `/api/articles/${params}/comments` })
  }
  export const postComments = (params,data) => {
    return request({ method: 'POST', url: `/api/articles/${params}/comments`, data })
  }