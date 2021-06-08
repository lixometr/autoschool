import useApi, { UseApiOptions } from '@/compositions/useApi'
import { CountryEntity } from '@/models/country.entity'
import { DataResponse } from '@/models/data.response'
import { AxiosResponse } from 'axios'

export const useApiKeystrokeEnroll = (opts?: UseApiOptions) =>
  useApi<{ pattern: string; origin: string }, any>(
    ({ pattern, origin }) => ({
      url: '/v1/keystroke/enroll',
      method: 'POST',
      data: {
        typing_pattern: pattern,
        origin,
      },
    }),
    opts,
  )
export const useApiKeystrokeVerify = (opts?: UseApiOptions) =>
  useApi<{ pattern: string; unitId: number }, any>(
    ({ pattern, unitId }) => ({
      url: '/v1/keystroke/verify',
      method: 'POST',
      data: {
        typing_pattern: pattern,
        unit_id: unitId,
      },
    }),
    opts,
  )
export const useApiKeystrokeGetSamples = (opts?: UseApiOptions) =>
  useApi<any, any>(
    () => ({
      url: '/v1/keystroke/samples',
      method: 'GET',
    }),
    opts,
  )
