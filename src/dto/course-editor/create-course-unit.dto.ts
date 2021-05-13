import { CourseEditorLangValueEntity } from '@/models/course-editor/course-editor-lang-value.entity'
import { Type } from 'class-transformer'

export class CreateCourseUnitDto {
  @Type(() => CourseEditorLangValueEntity)
  name: CourseEditorLangValueEntity[]
  passing_time: number
  type: 'unit'
  order: number
}
