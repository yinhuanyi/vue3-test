/**
 * @Author: Robby
 * @Date: 2021/12/7
 * @Filename: sys.js
 * @Function:
 **/

import request from '@/utils/request'

// 用户登录获取token
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    data: data
  })
}

// 携带token获取用户信息
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
