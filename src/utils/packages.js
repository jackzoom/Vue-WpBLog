//第三方组件
import scroll from '@/packages/scroll/scroll.vue'
import simplescroll from '@/packages/simpleScroll/simplescroll.vue'

const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(scroll.name, scroll);
  Vue.component(simplescroll.name, simplescroll);

}
// auto install 游览器环境下自动安装 e
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install
};
