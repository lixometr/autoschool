import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'


export class CourseEditorChecklistQuestionEntity {
  is_correct: number
  value: string
}

export class CourseEditorChecklistContentEntity {
  lang: string
  title: string
  @Type(() => CourseEditorChecklistQuestionEntity)
  questions: CourseEditorChecklistQuestionEntity[]

  
}

export class CourseEditorChecklistEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.checklist
  @Type(() => CourseEditorChecklistContentEntity)
  declare content: CourseEditorChecklistContentEntity[]
}
