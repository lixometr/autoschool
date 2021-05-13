import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorCrosscheckPartEntity {
  sub_id: number
  value: string
  correct: number
}

export class CourseEditorCrosscheckContentEntity {
  lang: string
  @Type(() => CourseEditorCrosscheckPartEntity)
  first_part: CourseEditorCrosscheckPartEntity[]

  @Type(() => CourseEditorCrosscheckPartEntity)
  second_part: CourseEditorCrosscheckPartEntity[]
}

export class CourseEditorCrosscheckEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.crosscheck
  @Type(() => CourseEditorCrosscheckContentEntity)
  content: CourseEditorCrosscheckContentEntity[]
}
