import { CourseEditorCheckboxEntity } from '@/models/course-editor/course-editor-checkbox.entity'
import { CourseEditorChecklistEntity } from '@/models/course-editor/course-editor-checklist.entity'
import { CourseEditorCrosscheckEntity } from '@/models/course-editor/course-editor-crosscheck.entity'
import { CourseEditorInfoEntity } from '@/models/course-editor/course-editor-info.entity'
import { CourseEditorQuestionEntity } from '@/models/course-editor/course-editor-question.entity'
import { CourseEditorTestEntity } from '@/models/course-editor/course-editor-test.entity'

export const UserToken = 'token'
export const LanguageTypes = {
  ru: {
    icon: require('@/assets/img/eng.png'),
  },
  en: {
    icon: require('@/assets/img/eng.png'),
  },
}

export enum UserRoles {
  superAdmin = 'super_admin',
  manager = 'manager',
  listener = 'listener'
}

export enum CourseEditorTypes {
  question = 'question',
  checklist = 'checklist',
  checkbox = 'checkbox',
  test = 'test',
  info = 'info',
  crosscheck = 'crosscheck',
}

export const CourseEditorEnitties: {
  [key in keyof typeof CourseEditorTypes]: new (...args: any[]) => any
} = {
  [CourseEditorTypes.question]: CourseEditorQuestionEntity,
  [CourseEditorTypes.checkbox]: CourseEditorCheckboxEntity,
  [CourseEditorTypes.checklist]: CourseEditorChecklistEntity,
  [CourseEditorTypes.test]: CourseEditorTestEntity,
  [CourseEditorTypes.info]: CourseEditorInfoEntity,
  [CourseEditorTypes.crosscheck]: CourseEditorCrosscheckEntity,
}
