import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorInfoContentEntity {
  lang: string
  value: string
}

export class CourseEditorInfoEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.info
  @Type(() => CourseEditorInfoContentEntity)
  declare content: CourseEditorInfoContentEntity[]
}
