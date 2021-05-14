export enum ModalName {
    login = 'login-modal',
    askQuestion = 'ask-question',
    addUser = 'add-user',
    addLanguage ='add-language',
    changeUnitTime = 'change-unit-time'

}

export const ModalComponents = {
    [ModalName.login]: () => import("@/components/Modals/LoginModal.vue"),
    [ModalName.askQuestion]: () => import("@/components/Modals/AskQuestion.vue"),
    [ModalName.addUser]: () => import("@/components/Modals/AddUser.vue"),
    [ModalName.addLanguage]: () => import("@/components/Modals/AddLanguageModal.vue"),
    [ModalName.changeUnitTime]: () => import("@/components/Modals/ChangeUnitTimeModal.vue"),
}