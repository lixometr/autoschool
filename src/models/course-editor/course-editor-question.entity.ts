import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'
export class CourseEditorQuestionAnswerEntity {
  value: string
  is_correct: boolean
}
export class CourseEditorQuestionContentEntity {
  lang: string
  title: string
  @Type(() => CourseEditorQuestionAnswerEntity)
  answers: CourseEditorQuestionAnswerEntity[]
}
export class CourseEditorQuestionEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.question
  @Type(() => CourseEditorQuestionContentEntity)
  content: CourseEditorQuestionContentEntity[]
}
