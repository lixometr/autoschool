import { CourseEditorLangValueEntity } from "@/models/course-editor/course-editor-lang-value.entity"
import { Type } from "class-transformer"

export class CreateCoursePartDto {
    id: number
    parent_id: number
    @Type(() => CourseEditorLangValueEntity)
    name: CourseEditorLangValueEntity[]
    tasks: any[]
    type: 'page'
    order: number
  }
  