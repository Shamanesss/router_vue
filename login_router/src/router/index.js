import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/brasil',
    name: 'brasil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BrazilView.vue')
  },
  {
    path: '/hawai',
    name: 'hawai',
    component: () => import('../views/HawaiView.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: () => import('../views/JamaicaView.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import('../views/PanamaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
