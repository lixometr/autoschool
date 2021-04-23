import useApi, { UseApiOptions } from '@/compositions/useApi'
import useTransfomer from '@/compositions/useTransfomer'
import { ApiParamsDto } from '@/dto/api-params.dto'
import { PersonalDataDto } from '@/dto/personal-data.dto'

export const useApiGetPartnerUsers = (opts?: UseApiOptions) =>
  useApi<ApiParamsDto, any>(
    (data: ApiParamsDto) => ({
      url: '/v1/users/list',
      method: 'GET',
      params: useTransfomer(ApiParamsDto, data),
    }),
    opts,
  )
