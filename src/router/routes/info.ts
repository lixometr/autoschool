import { RouteConfig } from "vue-router";

export const info: Array<RouteConfig> = [
    {
        name: "Home",
        path: '/',
        component: () => import("@/views/InfoPages/Home.vue"),
        meta: {
            layout: 'home'
        }
    },
    {
        name: "About",
        path: '/about',
        component: () => import("@/views/InfoPages/About.vue"),
        meta: {
            layout: 'empty'
        }
    },
    {
        name: "Contacts",
        path: '/contacts',
        component: () => import("@/views/InfoPages/Contacts.vue"),
        meta: {
            layout: 'landing'
        }
    },
    {
        name: "FAQ",
        path: '/faq',
        component: () => import("@/views/InfoPages/FAQ.vue"),
        meta: {
            layout: 'landing'
        }
    },
    {
        name: "Partnership",
        path: '/partnership',
        component: () => import("@/views/InfoPages/Partnership.vue"),
        meta: {
            layout: 'landing'
        }

    },
]