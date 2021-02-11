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
  {
    path: '/Partners',
    name: '/Partners',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Partners.vue')
  },
  {
    path: '/HistoryOfPayment',
    name: '/HistoryOfPayment',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/HistoryOfPayment.vue')
  },
  {
    path: '/PartnerUsers',
    name: '/PartnerUsers',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/PartnerUsers.vue')
  },
  {
    path: '/Promocode',
    name: '/Promocode',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Promocode.vue')
  },
  {
    path: '/HistoryOfStudentsPayment',
    name: '/HistoryOfStudentsPayment',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/HistoryOfStudentsPayment.vue')
  },
  {
    path: '/Documents',
    name: '/Documents',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Documents.vue')
  },
  {
    path: '/Partner',
    name: '/Partner',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Partner.vue')
  },
  {
    path: '/User', name: '/User', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/User.vue')
  },
  {
    path: '/Users', name: '/Users', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Users.vue')
  },
  {
    path: '/SuperAdmin', name: '/SuperAdmin', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/SuperAdmin.vue')
  },
  {
    path: '/ShippingAddress', name: '/ShippingAddress', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/ShippingAddress.vue')
  },
  {
    path: '/SuperAdmin2', name: '/SuperAdmin2', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/SuperAdmin2.vue')
  },
  {
    path: '/Q1', name: '/Q1', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Q1.vue')
  },
  {
    path: '/Q2', name: '/Q2', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Q2.vue')
  },
  {
    path: '/Q3', name: '/Q3', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Q3.vue')
  },
  {
    path: '/Result', name: '/Result', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Result.vue')
  },
  {
    path: '/Modal', name: '/Modal', component: () => import(/* webpackChunkName: "Contacts" */ '../views/cabinet/Modal.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
