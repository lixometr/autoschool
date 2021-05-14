import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorItemEntity } from './course-editor-item.entity'

export class CourseEditorCrosscheckFirstPartEntity {
  sub_id: number
  value: string
  correct: number
}
export class CourseEditorCrosscheckSecondPartEntity {
  sub_id: number
  value: string
  correct: number

}

export class CourseEditorCrosscheckContentEntity {
  lang: string
  @Type(() => CourseEditorCrosscheckFirstPartEntity)
  first_part: CourseEditorCrosscheckFirstPartEntity[]

  @Type(() => CourseEditorCrosscheckSecondPartEntity)
  second_part: CourseEditorCrosscheckSecondPartEntity[]
}

export class CourseEditorCrosscheckEntity extends CourseEditorItemEntity {
  type: CourseEditorTypes.crosscheck
  @Type(() => CourseEditorCrosscheckContentEntity)
  declare content: CourseEditorCrosscheckContentEntity[]
}
