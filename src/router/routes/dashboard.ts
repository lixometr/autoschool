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
            },
            {
                name: "ShippingAddress",
                path: "shipping-address",
                component: () => import("@/views/Dashboard/ShippingAddress.vue")
            },
            {
                name: "PartnerUsers",
                path: "users",
                component: () => import("@/views/Dashboard/PartnerUsers.vue")
            },
            {
                name: "Documents",
                path: "documents",
                component: () => import("@/views/Dashboard/Documents.vue")
            },
        ]
    },

]