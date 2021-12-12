/**
 * @Author: Robby
 * @Date: 2021/12/10
 * @Filename: index.js
 * @Function:
 **/
import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

// const locale = 'zh'
function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  legacy: false, // vue3使用composition api
  globalInjection: true, // 全局使用t函数
  locale: getLanguage(),
  messages
})

export default i18n
