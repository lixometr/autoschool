import { RouteConfig } from "vue-router";
import { courseEditor } from "./course-editor";

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
                name: "PartnerPromocodes",
                path: "promocodes",
                component: () => import("@/views/Dashboard/PartnerPromocodes.vue")
            },
            {
                name: "Documents",
                path: "documents",
                component: () => import("@/views/Dashboard/Documents.vue")
            },
            {
                name: "SecurityQuestions",
                path: "security-questions",
                component: () => import("@/views/Dashboard/SecurityQuestions.vue")
            },
            courseEditor
        ]
    },

]