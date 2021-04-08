import { Action, getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";
import store from "@/store";
import { useApiGetUser, useApiLogin } from "@/api/login";
import useCookie from "@/compositions/useCookie";
import { UserEntity } from "@/models/user.entity";
import { UserToken } from "@/types/constants";
import { errorHandler } from "@/helpers/error-handler";
import useRouter from "@/compositions/useRouter";
import useToast from "@/compositions/useToast";
import { plainToClass } from "class-transformer";
import { LoginDto } from "@/dto/login.dto";
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
  setTokenWithCookie({ token, expiresIn }: { token: string, expiresIn: number }) {
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
    const getUser = useApiGetUser({ toast: { error: errorHandler() } })
    await getUser.exec()
    if (!getUser.error.value) {
      this.setUser(getUser.result.value.data)
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
          if(err.response?.status === 401) {
            return 'Пользователь не найден'
          }
          return 'Произошла ошибка'
        },
        success(data) {
          return 'Успешный вход'
        }
      },
    })
    await doLogin.exec(plainToClass(LoginDto, { login, password }))
    if (doLogin.result.value && !doLogin.error.value) {
      this.setTokenWithCookie({ token: doLogin.result.value.access_token, expiresIn: 1 * 60 * 60 * 24 * 30});
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