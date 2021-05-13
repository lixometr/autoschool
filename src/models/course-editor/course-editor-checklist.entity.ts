import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'
export class CourseEditorChecklistAnswerEntity {
  sub_id: number
  value: string
}

export class CourseEditorChecklistQuestionEntity {
  correct: number
  value: string
}

export class CourseEditorChecklistContentEntity {
  lang: string
  title: string
  @Type(() => CourseEditorChecklistQuestionEntity)
  questions: CourseEditorChecklistQuestionEntity[]

  @Type(() => CourseEditorChecklistAnswerEntity)
  answers: CourseEditorChecklistAnswerEntity[]
}

export class CourseEditorChecklistEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.checklist
  @Type(() => CourseEditorChecklistContentEntity)
  content: CourseEditorChecklistContentEntity[]
}
