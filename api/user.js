import {request} from '@/plugins/request'

const login = (data) => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data,
  })
}
const register = (data) => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  
  })
}
export { login, register }
