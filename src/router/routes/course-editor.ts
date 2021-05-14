import { UserRoles } from '@/types/constants'
import { RouteConfig } from 'vue-router'

export const courseEditor: RouteConfig = {
  path: 'editor',
  component: {
    render: (c) => c('router-view'),
  },
  meta: {
    role: UserRoles.superAdmin,
  },
  children: [
    {
      path: '',
      redirect: { name: 'Dashboard' },
    },

    {
      name: 'Test',
      path: 'test',
      component: () => import('@/views/Dashboard/Test.vue'),
    },
    {
      name: 'CourseEditorNew',
      path: ':id/new',
      component: () => import('@/views/Dashboard/CourseEditor.vue'),
      meta: {
        role: UserRoles.superAdmin,
      },
      props: {
        isNew: true,
      },
    },
    {
      name: 'CourseEditor',
      path: ':id',
      component: () => import('@/views/Dashboard/CourseEditor.vue'),
      meta: {
        role: UserRoles.superAdmin,
      },
    },
  ],
}
