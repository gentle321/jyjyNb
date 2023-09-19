import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/houView',
        name: 'houView',
        component: () => import('../views/houView.vue')
      },
      {
        path: '/guanLi',
        name: 'guanLi',
        component: () => import('../views/guanLi.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(!token && to.path!='/login'){
    next('/login')
  }else{
    next()
  }
})

export default router
