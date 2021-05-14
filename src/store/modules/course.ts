import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'

@Module({ dynamic: true, store, name: 'course' })
class Course extends VuexModule {
  languages = []
  activeLanguage = 'English'
  get allLanguages() {
    console.log('10')
    return [this.defaultLanguage, ...this.languages]
  }
  get defaultLanguage() {
    return 'English'
  }
  @Mutation
  addLanguage(name: string) {
    this.languages.push(name)
  }
  @Mutation
  removeLanguage(name: string) {
    this.languages = this.languages.filter((lang) => lang !== name)
    if (this.activeLanguage === name) {
      this.activeLanguage = this.defaultLanguage
    }
  }
  @Mutation
  setActiveLanguage(name: string) {
    this.activeLanguage = name
  }
}
export const CourseModule = getModule(Course)
