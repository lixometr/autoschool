import { RouteConfig } from 'vue-router'

export const courseEditor: RouteConfig = {
  path: 'editor',
  component: () => import('@/views/Dashboard/CourseEditor.vue'),
  children: [
    {
      path: '',
      redirect: { name: 'Dashboard' },
    },
    {
      name: 'CourseEditor',
      path: ':id',
      component: () => import('@/views/Dashboard/CourseEditor.vue'),
    },
  ],
}
