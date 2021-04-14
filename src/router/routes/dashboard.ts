import { RouteConfig } from "vue-router";

export const dashboard: RouteConfig[] = [
    {
        path: "/dashboard",
        component: {
            render: c => c('router-view')
        },
        children: [
            {
                name: "Dashboard",
                path: "",
                component: () => import("@/views/Dashboard/Dashboard.vue")
            },
            {
                name: "PersonalData",
                path: "personal-data",
                component: () => import("@/views/Dashboard/PersonalData.vue")
            }
        ]
    },

]