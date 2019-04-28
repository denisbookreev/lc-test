import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    //* Home
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'users'
      }
    },
  
    //* Users
    {
      path: '/users',
      name: 'users',
      component: () => import('@Pages/Users.vue')
    },
  
    //* User
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('@Pages/User.vue'),
      props: true
    }
  ],
  linkActiveClass: '_active'
})

export default router
