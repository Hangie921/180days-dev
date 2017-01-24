import Vue from 'vue'
import App from 'src/App'
import router from './router'
import vr from 'vue-resource'
import vx from 'vuex'

Vue.use(vr)
Vue.use(vx)
const store = new vx.Store({
  state: {
    showLoading: false
  },
  mutations: {
    hideLoading (state) {
      state.showLoading = false
    },
    showLoading (state) {
      state.showLoading = true
    }
  }
})

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
