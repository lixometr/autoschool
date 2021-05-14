import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorQuestionContentEntity {
  lang: string
  title: string
  is_correct: boolean
}
export class CourseEditorQuestionEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.question
  @Type(() => CourseEditorQuestionContentEntity)
  declare content: CourseEditorQuestionContentEntity[]
}
