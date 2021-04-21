import { Type } from "class-transformer"

export class SecurityQuestionAnswerEntity {
  id: number
  answer: string
}
export class SecurityQuestionEntity {
  id: number
  name: string
  @Type(() => SecurityQuestionAnswerEntity)
  answers: SecurityQuestionAnswerEntity[]
}
