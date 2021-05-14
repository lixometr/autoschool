import { CourseModule } from '@/store/modules/course'
import { CourseEditorTypes } from '@/types/constants'
import { Type } from 'class-transformer'
import { CourseEditorCheckboxEntity } from './course-editor-checkbox.entity'
import { CourseEditorChecklistEntity } from './course-editor-checklist.entity'
import { CourseEditorCrosscheckEntity } from './course-editor-crosscheck.entity'
import { CourseEditorInfoEntity } from './course-editor-info.entity'
import { CourseEditorItemEntity } from './course-editor-item.entity'
import { CourseEditorLangValueEntity } from './course-editor-lang-value.entity'
import { CourseEditorQuestionEntity } from './course-editor-question.entity'
import { CourseEditorTestEntity } from './course-editor-test.entity'

export class CourseEditorPartEntity {
  id: number
  order: number
  type: 'page'
  parent_id: number
  @Type(() => CourseEditorLangValueEntity)
  name: CourseEditorLangValueEntity[]
  @Type(() => CourseEditorItemEntity, {
    keepDiscriminatorProperty: true,
    discriminator: {
      property: 'type',
      subTypes: [
        {
          value: CourseEditorCheckboxEntity,
          name: CourseEditorTypes.checkbox,
        },
        {
          value: CourseEditorChecklistEntity,
          name: CourseEditorTypes.checklist,
        },
        {
          value: CourseEditorCrosscheckEntity,
          name: CourseEditorTypes.crosscheck,
        },
        {
          value: CourseEditorInfoEntity,
          name: CourseEditorTypes.info,
        },
        {
          value: CourseEditorQuestionEntity,
          name: CourseEditorTypes.question,
        },
        {
          value: CourseEditorTestEntity,
          name: CourseEditorTypes.test,
        },
      ],
    },
  })
  tasks: Array<
    | CourseEditorCheckboxEntity
    | CourseEditorChecklistEntity
    | CourseEditorCrosscheckEntity
    | CourseEditorInfoEntity
    | CourseEditorQuestionEntity
    | CourseEditorTestEntity
  >

  get langName() {
    const activeLang = CourseModule.activeLanguage
    const activeItem = this.name.find((item) => {
      return item.lang === activeLang
    })
    return { lang: activeLang, ...activeItem }
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
