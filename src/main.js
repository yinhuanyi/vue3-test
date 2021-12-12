import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import '@/styles/index.scss' // 导入自定义全局样式，消除元素自带的样式
import installIcons from '@/icons' // 获取到导入icon的函数
import '@/permission' // 导入路由鉴权
import i18n from '@/i18n' // 导入i18n

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(store).use(router).use(i18n).mount('#app')
