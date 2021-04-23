import { Type } from 'class-transformer'

class SecurityQuestionAnswer {
  question_id: number
  answer_id: number
  answer: string
}
export class SecurityQuestionsDto {
  @Type(() => SecurityQuestionAnswer)
  answers: SecurityQuestionAnswer[]
}
