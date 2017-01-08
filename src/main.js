import Vue from 'vue'
import App from 'src/App'
import router from './router'

const app = new Vue({
  router,
  ...App
})

app.$mount('#app')
