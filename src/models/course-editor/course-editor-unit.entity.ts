import { Type } from 'class-transformer'
import { CourseEditorLangValueEntity } from './course-editor-lang-value.entity'

export class CourseEditorUnitEntity {
  id: number
  order: number
  type: 'unit'
  @Type(() => CourseEditorLangValueEntity)
  name: CourseEditorLangValueEntity[]
}
