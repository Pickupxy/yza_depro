import request from '@/utils/request'

//登录  && 获取sso code
export function login(params) {
  return request({
    url: '/login',
    method: 'POST',
    data: params
  })
}
