import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/menu_page/home'
import Article from '../pages/spa_page/article'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      title: '主页',
      component: Home,
      meta: {
        noPageAnimation: true,
        pageTitle: '主页',
        keepAlive: true
      }
    },
    {
      path: '/article/:artid',
      name: 'article_detail',
      component: Article,
      meta: {
        noPageAnimation: false,
      }
    }
  ]
})
