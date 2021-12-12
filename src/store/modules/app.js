/**
 * @Author: Robby
 * @Date: 2021/12/9
 * @Filename: app.js
 * @Function: 这个是同步操作，不是异步操作，所有没有定义actions
 **/
import { getItem, setItem } from '@/utils/storage'
import { LANG } from '@/constant'

const state = {
  sidebarOpened: true,
  language: getItem(LANG) || 'zh'
}

const mutations = {
  triggerSidebarOpened: (state) => {
    state.sidebarOpened = !state.sidebarOpened
  },
  setLanguage: (state, lang) => {
    setItem(LANG, lang)
    state.language = lang
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
