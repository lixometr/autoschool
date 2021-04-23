import { computed, ComputedRef, Ref, ref, watch } from '@vue/composition-api'
import useGlobalLoading from './useGlobalLoading'
import usePagination from './usePagination'
import useRouter from './useRouter'
import useTranslate from './useTranslate'
interface UseItemsPageProps {
  api: (...args: any[]) => { exec; error; result; isLoading }
}
export default function useItemsPage(props: UseItemsPageProps) {
  const { api } = Object.assign({}, props)
  let toFetch = ref()
  const { exec, result } = api({
    toast: { error: (err) => useTranslate().i18n.t('errors.requestError') },
  })
  const fetchItems = async (fetchValues = {}) => {
    await exec({ ...toFetch.value, ...fetchValues })
  }
  const _init = async () => {
    const gLoading = useGlobalLoading()
    gLoading.show()
    await fetchItems()
    gLoading.hide()
    watch(toFetch, () => {
      fetchItems()
    })
  }

  const refreshItems = async () => {
    await fetchItems()
  }
  const search = async (searchPhrase: string) => {
    await fetchItems({ filter: searchPhrase })
  }

  const items = ref([])
  watch(result, (data: any) => {
    items.value = data.data
  })

  const init = async ({ fetchData }: { fetchData?: ComputedRef<any> }) => {
    toFetch = fetchData || toFetch
    await _init()
  }
  return {
    search,
    items,
    fetchItems,
    refreshItems,
    init,
  }
}
