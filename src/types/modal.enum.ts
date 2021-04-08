export enum ModalName {
    login = 'login-modal'
  
}

export const ModalComponents = {
   [ModalName.login]: () => import("@/components/Modals/LoginModal.vue")
    
}