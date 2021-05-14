import useApi, { UseApiOptions } from '@/compositions/useApi'
import { UploadFileDto } from '@/dto/upload-file.dto'
import buildFormData from '@/helpers/build-form-data'
import { AxiosResponse } from 'axios'
export const useApiUploadFile = (opts: UseApiOptions) =>
  useApi<UploadFileDto, { url: string }>(
    (data) => {
      const toSend = buildFormData(data)
      return {
        method: 'POST',
        url: '/v1/files',
        data: toSend,
      }
    },
    opts,
    ({ data }: AxiosResponse<{ data: { url: string } }>) => {
      return data.data
    },
  )
