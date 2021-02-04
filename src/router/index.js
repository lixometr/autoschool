import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

/*
  сюда подключаем файлы из каталога view
  принцип:
  import Home from '../views/Home.vue'

  Страница авторизации - это точно такой же маршрут
*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/partnership',
    name: 'Partnership',
    // route level code-splitting
    // this generates a separate chunk (Partnership.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Partnership" */ '../views/Partnership.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    // route level code-splitting
    // this generates a separate chunk (FAQ.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FAQ" */ '../views/FAQ.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (Contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
