import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Graph from './components/Graph.vue'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/graph/:country', component: Graph },
    { path: '*', component: HelloWorld }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
