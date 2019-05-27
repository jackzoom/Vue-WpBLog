/*
 *
 * WordPres版 Vue Blog
 * author: jackzoom
 * github:    https://github.com/jackzoom/Vue-WpBLog
 * 基于Wordpress 插件:  REST API TO MiniProgram V1.5.6
 * Wordpress插件地址：https://wordpress.org/plugins/rest-api-to-miniprogram/
 * Copyright (c) 2018 http://blog.jackzoom.me All rights reserved.
 * Created by jackzoom on 2019/05/20.
 */
import axios from 'axios'
import qs from 'querystring'
import {
  apiURL
} from './config'
import utils from './utils';

// const baseURL = 'http://localhost:8081'; //访问域名

let HOST = process.env.HOST;
HOST = HOST === 'prod' ? 'http://www.jackzoom.com:8080' : '/api';
axios.defaults.baseURL = HOST;
// 跨域访问
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //post是表单提交

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 根据响应返回的headers进行拦截
  // 对响应数据做点什么
  return response;
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export function httpGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function httpPost(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function httpDelete(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

export function httpPut(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(res => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
const Base_Url = '/wp-json/wp/v2/'; //'www.jackzoom.com:8080' //本地 phpstudy 部署

export default {
  get: function(url, param) {
    return httpGet(url, param);
  },
  post: function(url, param) {
    return httpPost(url, param);
  },
  //获取文章详情
  getArticleDetail: function(param) {
    return httpGet(Base_Url + apiURL.article_detail + param.id, param.params)
  },
  //获取文章列表
  getArticleList: function(param) {
    return httpGet(Base_Url + apiURL.article_list + 'per_page=' + param.pageSize + "&page=" + param.pageIndex, param.params)
    //  return Base_Url + "posts?per_page=" + obj.pageSize + "&page=" + obj.pageIndex
  }
}


// module.exports = {
// article_detail: Base_Url + 'posts/',
// article_list: Base_Url + 'posts?per_page=20&page=1'
// }
