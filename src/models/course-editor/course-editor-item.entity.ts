import { CourseModule } from '@/store/modules/course'
export class CourseEditorItemEntity {
  id?: number
  order: number
  content: any[]
  get langContent() {
    const activeLang = CourseModule.activeLanguage
    const langItem = this.content.find((item) => {
      return item.lang === activeLang
    })
    return { lang: activeLang, ...langItem }
  }

  setLangContent(values: any) {
    const activeLang = CourseModule.activeLanguage
    const contentIdx = this.content.findIndex((item) => {
      return item.lang === activeLang
    })
    let newContent = [...this.content]
    if (contentIdx < 0) {
      newContent.push(values)
    } else {
      newContent[contentIdx] = values
    }
    this.content = newContent
  }
}
