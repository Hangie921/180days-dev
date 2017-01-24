import Vue from 'vue'
import Router from 'vue-router'
import Index from 'src/pages/001Index'
import randomBg from 'src/pages/002Random_bg'
import paintTheWall from 'src/pages/003Paint_the_wall'
import secretMsg from 'src/pages/004Secret_msg'
import dateTracker from 'src/pages/005Date_tracker'
import technicalBox from 'src/pages/006Technical_boxes'
import moreDropShadow from 'src/pages/007More_Drop_Shadow'
import showTheWeather from 'src/pages/087Show_the_weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show_the_weather',
      component: showTheWeather
    },
    {
      path: '/more_drop_shadow',
      component: moreDropShadow
    },
    {
      path: '/technical_box',
      component: technicalBox
    },
    {
      path: '/date_tracker',
      component: dateTracker
    },
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
