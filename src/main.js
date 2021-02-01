import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { svgSpritePlugin } from 'vue-svg-sprite'

createApp(App).use(router, svgSpritePlugin).mount('#app') 
