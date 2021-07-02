import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import isLoggedIn from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isAuthenticated
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: isNotAuthenticated
  }
]

const router = new VueRouter({
  routes
})

const isAuthenticated = (to, from, next) => {
  if (isLoggedIn()) {
    next()
    return
  }
  next('/')
}
const isNotAuthenticated = (to, from, next) => {
  if (!isLoggedIn()) {
    next()
    return
  }
  next('/login')
}

export default router
