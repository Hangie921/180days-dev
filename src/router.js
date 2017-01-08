import Vue from 'vue'
import Router from 'vue-router'
import Index from 'src/pages/001Index'
import randomBg from 'src/pages/002Random_bg'
import paintTheWall from 'src/pages/003Paint_the_wall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/random_bg',
      component: randomBg
    },
    {
      path: '/paint_the_wall',
      component: paintTheWall
    }
  ]
})
