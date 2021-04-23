import useApi, { UseApiOptions } from '@/compositions/useApi'
import useTransfomer from '@/compositions/useTransfomer'
import { SecurityQuestionsDto } from '@/dto/security-questions.dto'
import { DataResponse } from '@/models/data.response'
import { SecurityQuestionEntity } from '@/models/sequrity-question.entity'
import { AxiosResponse } from 'axios'

export const useApiGetSecurityQuestions = (opts?: UseApiOptions) =>
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
export const useApiSendSecurityQuestions = (opts?: UseApiOptions) =>
  useApi<SecurityQuestionsDto, any>(
    (data: SecurityQuestionsDto) => ({
      url: '/v1/questions/answer',
      method: 'POST',
      data: useTransfomer(SecurityQuestionsDto, data)
    }),
    opts,
  )
