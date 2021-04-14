import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import { useApiGetUser, useApiLogin } from "@/api/auth";
import useCookie from "@/compositions/useCookie";
import { UserEntity } from "@/models/user.entity";
import { UserToken } from "@/types/constants";
import useRouter from "@/compositions/useRouter";
import useToast from "@/compositions/useToast";
import useTranslate from "@/compositions/useTranslate";
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  user: UserEntity | null = null
  token: string | null = null
  get isAuth() {
    return !!this.token && this.user
  }
  @Mutation
  setUser(value: UserEntity) {
    this.user = value
  }
  @Mutation
  setToken(token: string) {
    this.token = token
  }

  @Action
  setTokenWithCookie({ token, expiresIn = 1 * 60 * 60 * 24 * 30 }: { token: string, expiresIn?: number }) {
    this.setToken(token)
    const cookie = useCookie()
    cookie.set(UserToken, token, expiresIn)
  }
  @Action
  removeToken() {
    const cookie = useCookie()
    cookie.remove(UserToken)
    this.setToken(null)
  }
  @Action
  initToken() {
    const cookie = useCookie()
    const token = cookie.get(UserToken)
    this.setToken(token)
  }
  @Action
  async init() {
    this.initToken()
    if (this.token) {
      const result = await this.fetchUser()
      if (!result) return
    }
  }

  @Action
  async fetchUser() {
    const getUser = useApiGetUser({})
    await getUser.exec()
    if (!getUser.error.value) {
      this.setUser(getUser.result.value)
    } else {
      this.setUser(null)
      this.removeToken()
    }
    return getUser.result.value
  }
  @Action
  async login({ login, password }) {
    const doLogin = useApiLogin({
      toast: {
        error: err => {
          if (err.response?.status === 401) {
            return useTranslate().i18n.t('validations.userNotFound') as string
          }
          return useTranslate().i18n.t('validations.errorHappened') as string
        },
        success(data) {
          return useTranslate().i18n.t('validations.successLogin') as string
        }
      },
    })
    await doLogin.exec({ login, password })
    if (doLogin.result.value && !doLogin.error.value) {
      this.setTokenWithCookie({ token: doLogin.result.value.access_token });
      this.fetchUser()
      return true
    }
    return false
  }
  @Action
  async logout() {
    this.removeToken()
    this.setUser(null)
    const router = useRouter()
    router.push({ name: "Login" })
    const { success } = useToast()
    success({
      message: 'Выход'
    })
    return true
  }
}
export const UserModule = getModule(User)