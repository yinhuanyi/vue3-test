/**
 * @Author: Robby
 * @Date: 2021/12/7
 * @Filename: request.js
 * @Function:
 **/
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      // 判断用户token是否超时
      if (isCheckTimeout()) {
        // 用户登出
        store.dispatch('user/logout')
        // 抛出异常
        return Promise.reject(new Error('token 失效'))
      }

      // 获取用户token，设置Authorization请求头
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (response) => {
    const res = response.data
    if (res.success) {
      return res
    } else {
      ElMessage({
        message: res.msg || '请求失败',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || '请求失败'))
    }
  },
  // 请求失败
  (error) => {
    // 判断服务器端返回的状态码，根据状态码===401，让用户登出
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      store.dispatch('user/logout')
    }

    ElMessage({
      message: error.message || '请求失败',
      type: 'error',
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)

export default service
