/**
 * Created by jackzoom on 2019/05/20.
 */

const Base_Url = '/wp-json/wp/v2/'; //'www.jackzoom.com:8080' //本地 phpstudy 部署
export const apiURL = {
  article_detail: Base_Url + 'posts/',
  article_list: Base_Url + 'posts?per_page=20&page=1'
}
