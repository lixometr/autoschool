import { computed, ref } from '@vue/composition-api'
import Vue from 'vue'
export default function useTypingDna({ onLoad, text, input }) {
  (window as any).TypingDNA = null
  const loader = Vue.loadScript(
    'https://www.typingdna.com/scripts/typingdna.js',
  )
  const isLoading = ref(true)
  const tdna = ref({} as any)
  const options = computed(() => ({
    type: 1,
    text,
  }))

  const _onLoad = () => {
    tdna.value = new (window as any).TypingDNA()
  }
  loader.then(() => {
    isLoading.value = false
    _onLoad()
    onLoad && onLoad()
  })

  const addTarget = (inp: HTMLInputElement) => {
    tdna.value.addTarget(inp)
  }
  const init = () => {
    addTarget(input)
  }
  const getPattern = () => {
    return tdna.value.getTypingPattern(options)
  }
  const getQuality = () => {
    return tdna.value.getQuality(getPattern())
  }
  return {
    addTarget,
    getQuality,
    getPattern,
    init,
    tdna,
    loader,
    isLoading,
  }
}
