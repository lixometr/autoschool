import { RoleEntity } from '@/models/role.entity'
import { UserModule } from '@/store/modules/user'
import { UserRoles } from '@/types/constants'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { oldRoutes } from './old-routes'
import { auth } from './routes/auth'
import { dashboard } from './routes/dashboard'
import { info } from './routes/info'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...info,
  ...dashboard,
  ...oldRoutes,
  ...auth,
  // {
  //   path: '*',
  //   name: "PageNotFound",
  //   component: () => import('@/views/404.vue'),
  //   meta: {
  //     // layout: 'landing'
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
const noAuthList = ['Home', 'About', 'FAQ', 'SignUp', 'Contacts', 'Partnership']
router.beforeEach((to, from, next) => {
  if (!noAuthList.includes(to.name) && to.meta?.noAuth !== true) {
    if (!UserModule.isAuth) {
      return next({ name: 'Home' })
    } else {
      if (to.meta?.role) {
        if (to.meta?.role === UserModule.user.role.name) {
          return next()
        } else {
          return next({ name: 'Dashboard' })
        }
      }
      next()
    }
  } else next()
})

export default router
