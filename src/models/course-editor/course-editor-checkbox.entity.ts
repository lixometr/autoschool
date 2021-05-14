import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorCheckboxOptionEntity {
  value: string
  is_correct: boolean
}

export class CourseEditorCheckboxContentEntity {
  lang: string
  title: string

  @Type(() => CourseEditorCheckboxOptionEntity)
  options: CourseEditorCheckboxOptionEntity[]
}

export class CourseEditorCheckboxEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.checkbox
  @Type(() => CourseEditorCheckboxContentEntity)
  declare content: CourseEditorCheckboxContentEntity[]
}
