import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"
import { ApiParamsDto } from "@/dto/api-params.dto"
import { UserModule } from "@/store/modules/user"

export const useApiGetPartnerPromocodes = (opts?: UseApiOptions) => useApi<ApiParamsDto, any>(
    (data: ApiParamsDto) => ({
        url: `/v1/partner/${UserModule.user?.id}/promocodes/list`,
        method: "GET",
        params: useTransfomer(ApiParamsDto, data)
    }),
    opts
)