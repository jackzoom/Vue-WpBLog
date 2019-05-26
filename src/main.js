// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Packages from './utils/packages.js'
import Mixins from './mixins'
import * as filters from './filters'
import 'lib-flexible/flexible'
//主css样式
import './scss/style.scss'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
// 滚动条插件
import BScroll from 'better-scroll'
//滚动
Vue.prototype.$BScroll=BScroll;

Vue.use(Mint);
Vue.use(VueAxios, Axios);

//全局我定义的组件标签
Vue.use(Packages);

//全局方法
Vue.mixin(Mixins);

// 注册全局Filter
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
/**
** 设置API接口域名
**/

// 根据 process.env.HOST 的值判断当前是什么环境
// 命令：npm run build -- test ，process.env.HOST就设置为：'test'
let HOST = process.env.HOST;
HOST = HOST === 'prod' ? 'http://www.jackzoom.com:8080' : '/api';
console.log("请求地址：",HOST);
Axios.defaults.baseURL = HOST;
// 跨域访问
Axios.defaults.headers.get['Content-Type'] = 'application/json';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
