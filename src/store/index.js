import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'
Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    blogName: "Jm Blog",
  },
  mutations: {
    editBlogName(state, data) {
      state.blogName = data
    }
  },
  actions: {
    //值得注意的是，await必须在async函数的上下文中的。
    //获取文章列表
    async getArticleList({
      dispatch,
      commit
    }, value) {
      try {
        var data = await api.getArticleList(value);
        console.log("拦截文章列表",data)
        if (data.length) { //这里的20000是业务逻辑 通信还是成功了
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      } catch (e) { //捕捉错误信息
        console.log("捕捉错误信息:",e);
        return Promise.reject(e);
      }
    },
    //获取文章详情
    async getArticleDetail({
      dispatch,
      commit
    }, value) {
      try {
        var data = await api.getArticleDetail(value);
        if (data) { //这里的20000是业务逻辑 通信还是成功了
          return Promise.resolve(data);
        } else {
          return Promise.reject(data);
        }
      } catch (e) { //捕捉错误信息
        return Promise.reject({
          code: 404,
          message: '未查询到该文章！'
        });
      }
    },
  }
})

export default store
