import { createStore } from 'vuex'
import user from '@/store/modules/user'
import app from '@/store/modules/app'
import theme from '@/store/modules/theme'
import getters from './getters'

export default createStore({
  modules: {
    user,
    app,
    theme
  },
  getters
})
