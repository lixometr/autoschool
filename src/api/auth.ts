import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"
import { LoginDto } from "@/dto/login.dto"
import { SignUpDto } from "@/dto/signup.dto"
import { UserEntity } from "@/models/user.entity"
import { AxiosResponse } from "axios"
import { plainToClass } from "class-transformer"


export const useApiLogin = (opts?: UseApiOptions) => useApi<LoginDto, { access_token: string }>(
    (data: LoginDto) => ({
        url: '/v1/auth/login',
        method: "POST",
        data: useTransfomer(LoginDto, data),
    }),
    opts
)

export const useApiGetUser = (opts?: UseApiOptions) => useApi<null, UserEntity>(
    () => ({
        url: '/v1/auth/profile',
        method: "GET",
        params: {
            include: 'roles,files'
        }
    }),
    opts,
    ({ data }: AxiosResponse<{ data: UserEntity }>) => {
        return plainToClass(UserEntity, data.data)
    }
)

export const useApiLogout = (opts?: UseApiOptions) => useApi<null, any>(
    () => ({
        url: '/v1/auth/logout',
        method: "POST",
    }),
    opts,
)

export const useApiSignup = (opts?: UseApiOptions) => useApi<SignUpDto, { access_token: string }>(
    (data: SignUpDto) => ({
        url: '/v1/auth/register',
        method: "POST",
        data: useTransfomer(SignUpDto, data),
    }),
    opts
)
