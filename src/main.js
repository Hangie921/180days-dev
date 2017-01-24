import Vue from 'vue'
import App from 'src/App'
import router from './router'
import vr from 'vue-resource'

Vue.use(vr)

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
