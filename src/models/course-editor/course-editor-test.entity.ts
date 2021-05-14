import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorTestAnswerEntity {
  value: string
  sub_id: number
}
export class CourseEditorTestQuestionEntity {
  value: string
  correct: number
  @Type(() => CourseEditorTestAnswerEntity)
  answers: CourseEditorTestAnswerEntity[]
}

export class CourseEditorTestContentEntity {
  lang: string
  @Type(() => CourseEditorTestQuestionEntity)
  questions: CourseEditorTestQuestionEntity[]
}

export class CourseEditorTestEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.test
  @Type(() => CourseEditorTestContentEntity)
  declare content: CourseEditorTestContentEntity[]
}
