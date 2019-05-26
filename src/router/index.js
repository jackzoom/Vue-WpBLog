import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/menu_page/home'
import List from '../pages/menu_page/list'
import Mine from '../pages/menu_page/mine'
import Article from '../pages/spa_page/article'

Vue.use(Router)
export default new Router({
  mode: 'history', //把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
  routes: [{
      path: '/',
      name: 'home',
      title: '主页',
      component: Home,
      meta: {
        pageTitle: '主页',
        keepAlive: true
      }
    }, {
      path: '/list',
      name: 'list',
      title: '列表',
      component: List,
      meta: {
        keepAlive: true
      }
    }, {
      path: '/mine',
      name: 'mine',
      title: '我的',
      component: Mine,
    },
    {
      path: '/article/:artid',
      name: 'article_detail',
      component: Article
    }
  ]
})
