export enum ModalName {
    login = 'login-modal',
    askQuestion = 'ask-question'

}

export const ModalComponents = {
    [ModalName.login]: () => import("@/components/Modals/LoginModal.vue"),
    [ModalName.askQuestion]: () => import("@/components/Modals/AskQuestion.vue")
}