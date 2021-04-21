import useApi, { UseApiOptions } from '@/compositions/useApi'
import { CountryEntity } from '@/models/country.entity'
import { DataResponse } from '@/models/data.response'
import { AxiosResponse } from 'axios'

export const useApiGetCountries = (opts?: UseApiOptions) =>
  useApi<{ search: string }, CountryEntity[]>(
    ({ search }) => ({
      url: '/v1/refbook/countries/list',
      method: 'GET',
      params: {
        filter: search,
      },
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<CountryEntity[]>>) => {
      return data.data
    },
  )
export const useApiGetCities = (opts?: UseApiOptions) =>
  useApi<{ search: string; stateId: number }, CountryEntity[]>(
    ({ search, stateId }) => ({
      url: '/v1/refbook/cities/list',
      method: 'GET',
      params: {
        filter: search,
        state_id: stateId,
      },
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<CountryEntity[]>>) => {
      return data.data
    },
  )
export const useApiGetStates = (opts?: UseApiOptions) =>
  useApi<{ search: string; countryId: number }, CountryEntity[]>(
    ({ search, countryId }) => ({
      url: '/v1/refbook/states/list',
      method: 'GET',
      params: {
        filter: search,
        country_id: countryId,
      },
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<CountryEntity[]>>) => {
      return data.data
    },
  )
