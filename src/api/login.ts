import useApi, { UseApiOptions } from "@/compositions/useApi"
import { LoginDto } from "@/dto/login.dto"
import { UserEntity } from "@/models/user.entity"
import { ConfigModule } from "@/store/modules/config"
import { classToPlain } from "class-transformer"

export const useApiLogin = (opts?: UseApiOptions) => useApi<LoginDto, { access_token: string }>(
    (data: LoginDto) => ({
        url: '/auth/login',
        method: "POST",
        data: classToPlain(data),
    }),
    { ...opts }
)

export const useApiGetUser = (opts?: UseApiOptions) => useApi<null, {data: UserEntity}>(() => ({ url: '/auth/profile', method: "GET" }), { ...opts })
