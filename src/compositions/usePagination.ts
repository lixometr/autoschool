import { ref, watch } from "@vue/composition-api";
interface UsePaginationProps {
    totalPages?: number
    nowPage?: number
}
export default function usePagination({ totalPages, nowPage }: UsePaginationProps = {}) {
    const page = ref(nowPage || 1)
    const total = ref(totalPages || 1)
    const nextPage = () => {
        if (page.value >= total.value) return;
        page.value += 1;
    };
    const prevPage = () => {
        if (page.value < 2) return;
        page.value -= 1;
    };
    const onChange = (cb: Function) => {
        watch(page, value => {
            cb(value)
        })
    }
    const setTotalPages = (value: number) => {
        total.value = value
    }
    const setPage = (value: number) => {
        page.value = value
    }
    return { page, nextPage, prevPage, onChange, setTotalPages, totalPages: total, setPage }
}