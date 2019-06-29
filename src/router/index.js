import Vue from 'vue'
import Router from 'vue-router'
import gallery from '@/components/gallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: gallery
    }
  ]
})
