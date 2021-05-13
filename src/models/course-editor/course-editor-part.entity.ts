import { Type } from 'class-transformer'
import { CourseEditorCheckboxEntity } from './course-editor-checkbox.entity'
import { CourseEditorChecklistEntity } from './course-editor-checklist.entity'
import { CourseEditorCrosscheckEntity } from './course-editor-crosscheck.entity'
import { CourseEditorInfoEntity } from './course-editor-info.entity'
import { CourseEditorLangValueEntity } from './course-editor-lang-value.entity'
import { CourseEditorQuestionEntity } from './course-editor-question.entity'
import { CourseEditorTestEntity } from './course-editor-test.entity'


export class CourseEditorPartEntity {
  order: number
  type: 'page'
  parent_id?: number
  @Type(() => CourseEditorLangValueEntity)
  name: CourseEditorLangValueEntity[]
  tasks: Array<
    | CourseEditorCheckboxEntity
    | CourseEditorChecklistEntity
    | CourseEditorCrosscheckEntity
    | CourseEditorInfoEntity
    | CourseEditorQuestionEntity
    | CourseEditorTestEntity
  >
}
