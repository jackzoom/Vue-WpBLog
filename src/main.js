// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible/flexible'
//主css样式
import './scss/style.scss'

import {
  apiURL
} from './utils/api'
window['apiURL'] = apiURL
Vue.use(VueAxios, Axios);
// 跨域访问
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.get['Content-Type'] = 'application/json';


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
