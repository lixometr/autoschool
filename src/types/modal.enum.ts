export enum ModalName {
    login = 'login-modal',
    askQuestion = 'ask-question',
    addUser = 'add-user'

}

export const ModalComponents = {
    [ModalName.login]: () => import("@/components/Modals/LoginModal.vue"),
    [ModalName.askQuestion]: () => import("@/components/Modals/AskQuestion.vue"),
    [ModalName.addUser]: () => import("@/components/Modals/AddUser.vue"),
}