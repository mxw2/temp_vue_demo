import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  store, 
  render: h => h(App),
  router
}).$mount('#app')
