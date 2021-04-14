import { RouteConfig } from 'vue-router';
export const oldRoutes: Array<RouteConfig> = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    //   },
    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/InfoPages/About.vue')
    //   },
    
    //   {
    //     path: '/partnership',
    //     name: 'Partnership',
    //     component: () => import(/* webpackChunkName: "Partnership" */ '../views/InfoPages/Partnership.vue')
    //   },
    //   {
    //     path: '/FAQ',
    //     name: 'FAQ',
    //     component: () => import(/* webpackChunkName: "FAQ" */ '../views/InfoPages/FAQ.vue')
    //   },
    //   {
    //     path: '/contacts',
    //     name: 'Contacts',
    //     component: () => import(/* webpackChunkName: "Contacts" */ '../views/InfoPages/Contacts.vue')
    //   },
      {
        path: '/cabinet/PartnerCabinet',
        name: '/cabinet/PartnerCabinet',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/PartnerCabinet.vue')
      },
      {
        path: '/cabinet/SponsorCabinet',
        name: '/cabinet/SponsorCabinet',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/SponsorCabinet.vue')
      },
      {
        path: '/cabinet/Managers',
        name: '/cabinet/Managers',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Managers.vue')
      },
      {
        path: '/cabinet/PersonalCabinet',
        name: '/cabinet/PersonalCabinet',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/PersonalCabinet.vue'),
        
      },
      {
        path: '/Registration',
        name: '/Registration',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Registration.vue')
      },
      {
        path: '/SetupSecurityQuestions',
        name: '/SetupSecurityQuestions',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/SetupSecurityQuestions.vue')
      },
      {
        path: '/PersonalData',
        name: '/PersonalData',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/PersonalData.vue')
      },
      {
        path: '/Partners',
        name: '/Partners',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Partners.vue')
      },
      {
        path: '/HistoryOfPayment',
        name: '/HistoryOfPayment',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/HistoryOfPayment.vue')
      },
      {
        path: '/PartnerUsers',
        name: '/PartnerUsers',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/PartnerUsers.vue')
      },
      {
        path: '/Promocode',
        name: '/Promocode',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Promocode.vue')
      },
      {
        path: '/HistoryOfStudentsPayment',
        name: '/HistoryOfStudentsPayment',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/HistoryOfStudentsPayment.vue')
      },
      {
        path: '/Documents',
        name: '/Documents',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Documents.vue')
      },
      {
        path: '/Partner',
        name: '/Partner',
        component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Partner.vue')
      },
      {
        path: '/User', name: '/User', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/User.vue')
      },
      {
        path: '/Users', name: '/Users', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Users.vue')
      },
      {
        path: '/SuperAdmin', name: '/SuperAdmin', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/SuperAdmin.vue')
      },
      {
        path: '/ShippingAddress', name: '/ShippingAddress', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/ShippingAddress.vue')
      },
      {
        path: '/SuperAdmin2', name: '/SuperAdmin2', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/SuperAdmin2.vue')
      },
      {
        path: '/Q1', name: '/Q1', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Q1.vue')
      },
      {
        path: '/Q2', name: '/Q2', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Q2.vue')
      },
      {
        path: '/Q3', name: '/Q3', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Q3.vue')
      },
      {
        path: '/Result', name: '/Result', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Result.vue')
      },
      {
        path: '/Modal', name: '/Modal', component: () => import(/* webpackChunkName: "Contacts" */ '../oldViews/cabinet/Modal.vue')
      },
    
]