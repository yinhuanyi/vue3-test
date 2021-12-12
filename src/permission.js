import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 * to: 要到哪里去
 * from：你从哪里来
 * next：是否要去
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // 快捷访问
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/') // 如果用户访问的是/login，那么跳转到首页
    } else {
      // 如果用户信息不存在，先获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfo')
      }
      next() // 如果访问的不是/login，那么直接跳转即可
    }
  } else {
    // 不存在token，如果访问白名单路由，那么直接跳转即可
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login') // 如果访问的不是白名单，强制跳转到/login
    }
  }
})
