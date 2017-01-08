import Vue from 'vue'
import Router from 'vue-router'
import Index from 'src/pages/001Index'
import randomBg from 'src/pages/002Random_bg'
import paintTheWall from 'src/pages/003Paint_the_wall'
import secretMsg from 'src/pages/004Secret_msg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/secret_msg',
      component: secretMsg
    },
    {
      path: '/paint_the_wall',
      component: paintTheWall
    },
    {
      path: '/random_bg',
      component: randomBg
    },
    {
      path: '/',
      component: Index
    }
  ]
})
