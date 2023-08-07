
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import SignUp from '../views/auth/SignUp.vue'
import SignIn from '../views/auth/SignIn.vue'

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp,
    meta: {
      requiresAuth: false
    }
  },
  
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)',
    // name: 'ErrorPage',
    // component: ErrorPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
