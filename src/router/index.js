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
    component: () => import(/* webpackChunkName: "Partnership" */ '../views/Partnership.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "FAQ" */ '../views/FAQ.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/cabinet/PartnerCabinet',
    name: '/cabinet/PartnerCabinet',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/PartnerCabinet.vue')
  },
  {
    path: '/cabinet/SponsorCabinet',
    name: '/cabinet/SponsorCabinet',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/SponsorCabinet.vue')
  },
  {
    path: '/cabinet/Managers',
    name: '/cabinet/Managers',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Managers.vue')
  },
  {
    path: '/cabinet/PersonalCabinet',
    name: '/cabinet/PersonalCabinet',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/PersonalCabinet.vue')
  },
  {
    path: '/Registration',
    name: '/Registration',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Registration.vue')
  },
  {
    path: '/SetupSecurityQuestions',
    name: '/SetupSecurityQuestions',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/SetupSecurityQuestions.vue')
  },
  {
    path: '/PersonalData',
    name: '/PersonalData',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/PersonalData.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
