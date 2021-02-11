import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueFinalModal from 'vue-final-modal'


createApp(App).use(router, VueFinalModal()).mount('#app')
// Vue.use()
