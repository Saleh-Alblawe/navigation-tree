import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({ typeUser: 'Admin'}),
  },
  {
    path: '/Home/:typeUser',
    name: 'Home',
    component: Home,
    props: (route) => ({ typeUser: route.params.typeUser}),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
