import { UserRoles } from '@/types/constants'
import { RouteConfig } from 'vue-router'

export const course: RouteConfig = {
  path: 'course',
  component: {
    render: (c) => c('router-view'),
  },
  meta: {
    // role: UserRoles.listener,
  },
  children: [
    {
      name: "Course",
      path: ':id',
      component: () => import('@/views/Dashboard/Course.vue'),
    },
  ],
}
