import { RouteConfig } from "vue-router";

export const auth: Array<RouteConfig> = [
    {
        name: "SignUp",
        path: '/signup',
        component: () => import("@/views/SignUp/SignUp.vue"),
    }
]