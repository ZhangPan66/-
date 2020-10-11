import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import echarts from 'echarts'
import 'echarts/map/js/province/zhejiang'
// 引入element-ui组件的js文件
import '@/assets/js/element/element.js';
// 引入公共样式
import '@/assets/common.css'
// 预处理本次请求，在请求头中添加令牌(token)
axios.interceptors.request.use(config => {
  config.headers.token = window.sessionStorage.getItem('token')
  return config 
})
axios.defaults.baseURL = 'http://47.93.205.62:8000/'
// 将axios添加到Vue构造函数的prototype上，全局使用axios
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
