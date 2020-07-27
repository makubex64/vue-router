import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brasil',
    name: 'Brasil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Brasil" */ '../views/Brasil.vue')
  },
  {
    path: '/panama',
    name: 'Panama',
    component: () => import(/* webpackChunkName: "Panama" */'../views/Panama.vue')
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: () => import(/* webpackChunkName: "Hawaii" */ '../views/Hawaii.vue')
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: () => import(/* webpackChunkName: "Jamaica" */ '../views/Jamaica.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


