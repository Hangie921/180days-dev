import Vue from 'vue'
import App from 'src/App'
import router from './router'
import vr from 'vue-resource'
import vx from 'vuex'

Vue.use(vr)
Vue.use(vx)

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
