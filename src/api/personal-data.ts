import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"
import { PersonalDataDto } from "@/dto/personal-data.dto"

export const useApiSendPersonalData = (opts?: UseApiOptions) => useApi<PersonalDataDto, any>(
    (data: PersonalDataDto) => ({
        url: '/v1/personal-data',
        method: "POST",
        data: useTransfomer(PersonalDataDto, data),
    }),
    opts
)