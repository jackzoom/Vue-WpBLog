import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const globaldata = {
  name: '我是默认标题',
  age: '22'
}

const store = new Vuex.Store({
  state: globaldata,
  mutations: {
    editAttrData(attr, val) {
      state[attr] = val
    }
  }
})

export default store
