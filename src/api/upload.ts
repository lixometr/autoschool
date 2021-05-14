import useApi from '@/compositions/useApi'
import { UploadFileDto } from '@/dto/upload-file.dto'
import buildFormData from '@/helpers/build-form-data'

export const useApiUploadFile = useApi<UploadFileDto, { url: string }>(
  (data) => {
    const toSend = buildFormData(data)
    return {
      method: 'POST',
      url: '/v1/files',
      data: toSend,
    }
  },
)
