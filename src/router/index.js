import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/resume',name: 'resume',component: () => import('../views/resume_box/resume.vue')},
  {path: '/css_xg',name: 'css_xg',component: () => import('../views/css_demo/css_xg.vue')},
  {path: '/money',name: 'money',component: () => import('../views/test_demo/money.vue')},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
