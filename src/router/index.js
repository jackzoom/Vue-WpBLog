import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '../pages/home'
import Article from '../pages/article'

Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:artid',
      name: 'article_detail',
      component: Article
    }
  ]
})
