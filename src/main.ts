import Vue from 'vue'
import 'reflect-metadata';
import "@/libs/composition-api"
import "@/libs/loading-overlay"
import "@/libs/toast"
// import "@/libs/load-script"
// import "@/libs/vue-modal"
import "@/libs/vue-cookie"

import "@/libs/vue-final-modal"
import "@/libs/vue-select"
// import "@/libs/ck-editor"

import i18n from "@/libs/vue-i18n"


import App from './App.vue'
import router from './router'
import store from './store'

import "@/libs/vue-click-outside"
import "@/libs/vue-moment"
import "@/libs/vue-meta"
import "@/libs/locale-yup"

import "@/libs/global-components"


import beforeLoad from '@/libs/before-load'


Vue.config.productionTip = false
beforeLoad().then(() => {
  new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount('#app')
})

