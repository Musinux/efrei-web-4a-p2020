import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#ff9800',
    secondary: '#4caf50',
    accent: '#9c27b0',
    error: '#e91e63',
    warning: '#ff5722',
    info: '#03a9f4',
    success: '#8bc34a'
  }
})
