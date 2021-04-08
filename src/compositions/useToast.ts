import Vue from "vue"
import { ToastComponent, ToastOptions } from "vue-toast-notification";
export default function useToast() {
    let instance: ToastComponent = null
    const show = (options: ToastOptions) => {
        instance = Vue.$toast.open(options);
    }
    const close = () => {
        if (!instance) return
        instance.dismiss();

    }
    const clear = () => {
        Vue.$toast.clear();

    }
    const success = (opts: Omit<ToastOptions, 'type'>) => {
        show({ ...opts, type: 'success' })
    }
    const error = (opts: Omit<ToastOptions, 'type'>) => {
        show({ ...opts, type: 'error' })
    }

    return { show, close, clear, success, error }
}