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

const CONFIG = require('./config.js')
// const Domain = CONFIG.DOMAIN;
const Domain = "";
const Base_Url = Domain + '/wp-json/wp/v2/'; //'www.jackzoom.com:8080' //本地 phpstudy 部署
module.exports = {
  //获取文章详情
  getArticleDetail: function(id) {
    return Base_Url + 'post/' + id
  },
  //获取文章列表
  getArticleList: function(obj) {
    return Base_Url + "posts?per_page=" + obj.pageSize + "&page=" + obj.pageIndex
  }
  // article_detail: Base_Url + 'posts/',
  // article_list: Base_Url + 'posts?per_page=20&page=1'
}
