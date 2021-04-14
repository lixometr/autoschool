import { RouteConfig } from "vue-router";

export const dashboard: RouteConfig[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        component: () => import("@/views/Dashboard/Dashboard.vue")
    }
]