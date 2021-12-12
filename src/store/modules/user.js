/**
 * @Author: Robby
 * @Date: 2021/12/7
 * @Filename: user.js
 * @Function:
 **/

import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

const state = {
  token: getItem(TOKEN) || '', // 先从LocalStorage中获取，如果没有，设置为空字符串
  userInfo: {}
}

const mutations = {
  setToken: (state, token) => {
    state.token = token // 将token存储到vuex中
    setItem(TOKEN, token) // 将token存储LocalStorage中
  },
  setUserInfo: (state, userInfo) => {
    state.userInfo = userInfo // 将用户信息存储到state中
  }
}

const actions = {
  // 登录到后台，获取token，写入到cookie
  // { commit }：是固定参数，对context的结构
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    // Todo: 为什么需要使用Promise呢？因为无论请求是成功还是失败了，组件中可以通过then+catch获取请求的结果
    return new Promise((resolve, reject) => {
      // Todo：这里的password使用md5进行加密，在vue2中没有这样做
      login({ username: username.trim(), password: md5(password) })
        .then((response) => {
          const { data } = response
          commit('setToken', data.token)
          // setToken(data.token)
          // Todo: 跳转到 /路由，但是不应该在这里跳转，应该在login组件中跳转
          router.push('/')
          setTimeStamp()
          resolve()
        })
        .catch((error) => {
          // 抛出异常
          reject(error)
        })
    })
  },

  // 获取用户信息, 这里使用async + await
  async getUserInfo({ commit, state }) {
    const res = await getUserInfo()
    // 这里是获取其data中的数据
    commit('setUserInfo', res.data)
    return res
  },
  // 用户退出登录，清理用户数据
  logout({ commit }) {
    commit('setToken', '')
    commit('setUserInfo', {})
    removeAllItem()
    // Todo: 清理掉权限相关的配置
    // ...

    // router.push('/login') // 跳转到登录页面
  }
}

// 以一个独立的模块形式导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
