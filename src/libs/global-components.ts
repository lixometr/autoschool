import Vue from "vue"
import LayoutDefault from "@/layout/default.vue"
import LayoutEmpty from "@/layout/empty.vue"
import LayoutLanding from "@/layout/landing.vue"
import HomeLayout from "@/layout/home.vue"

Vue.component('default-layout', LayoutDefault)
Vue.component('empty-layout', LayoutEmpty)
Vue.component('landing-layout', LayoutLanding)
Vue.component('home-layout', HomeLayout)