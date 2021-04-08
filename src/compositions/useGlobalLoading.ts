import { reactive, ref, watch } from "@vue/composition-api";
import useLoading from "./useLoading";
export default (function () {
    const loading = useLoading({ opacity: 1, transition: 'none' })
    const queue = ref([])
    let isLoading = ref(false)
    let idx = 0
    watch(queue, value => {
        if (value.length < 1) {
            loading.hide()
        } else {
            if (!loading.loading) {
                loading.show()
            }
        }
    })
    return function useGlobalLoading() {
        const id = ++idx
        const show = () => {
            queue.value.push({ id })
            loading.show()
            isLoading.value = true
        }
        const hide = () => {
            queue.value = queue.value.filter(item => item.id !== id)
        }
        return { show, hide }
    }
})()