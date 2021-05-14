import { CourseModule } from '@/store/modules/course'
import { Type } from 'class-transformer'
import { CourseEditorLangValueEntity } from './course-editor-lang-value.entity'
import { CourseEditorPartEntity } from './course-editor-part.entity'

export class CourseEditorUnitEntity {
  id: number
  order: number
  type: 'unit'
  @Type(() => CourseEditorPartEntity)
  pages?: CourseEditorPartEntity[]

  @Type(() => CourseEditorLangValueEntity)
  name: CourseEditorLangValueEntity[]
  get langName() {
    const activeLang = CourseModule.activeLanguage
    const activeItem = this.name.find((item) => {
      return item.lang === activeLang
    })
    return activeItem || ({} as CourseEditorLangValueEntity)
  }
  setLangName(value: any) {
    const activeLang = CourseModule.activeLanguage
    const idx = this.name.findIndex((item) => {
      return item.lang === activeLang
    })
    let newName = [...this.name]
    if (idx < 0) {
      newName.push(value)
    } else {
      newName[idx] = value
    }
    this.name = newName
  }
}
