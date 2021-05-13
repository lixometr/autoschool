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
}

export enum CourseEditorTypes {
  question = 'question',
  checklist = 'checklist',
  checkbox = 'checkbox',
  test = 'test',
  info = 'info',
  crosscheck = 'crosscheck'
}
