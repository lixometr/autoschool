import { Type } from 'class-transformer'

class SecurityQuestionAnswer {
  question_id: number
  answer_id: number
  value: string
}
export class SecurityQuestionsDto {
  @Type(() => SecurityQuestionAnswer)
  answers: SecurityQuestionAnswer[]
}
