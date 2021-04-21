import useApi, { UseApiOptions } from '@/compositions/useApi'
import useTransfomer from '@/compositions/useTransfomer'
import { DataResponse } from '@/models/data.response'
import { SecurityQuestionEntity } from '@/models/sequrity-question.entity'
import { AxiosResponse } from 'axios'

export const useApiGetSequrityQuestions = (opts?: UseApiOptions) =>
  useApi<undefined, SecurityQuestionEntity[]>(
    () => ({
      url: '/v1/questions/list',
      method: 'GET',
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<SecurityQuestionEntity[]>>) => {
      return data.data || []
    },
  )
