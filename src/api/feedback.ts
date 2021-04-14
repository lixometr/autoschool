import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"
import { AskQuestionDto } from "@/dto/ask-question.dto"


export const useApiSendFeedback = (opts?: UseApiOptions) => useApi<AskQuestionDto, { access_token: string }>(
    (data: AskQuestionDto) => ({
        url: '/v1/feedback',
        method: "POST",
        data: useTransfomer(AskQuestionDto, data),
    }),
    opts
)