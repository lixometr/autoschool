import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"

export const useApiGetPartnerUsers = (opts?: UseApiOptions) => useApi<any, any>(
    (data) => ({
        url: '/v1/users/list',
        method: "GET",
    }),
    opts
)