import { toRefs } from '@vue/composition-api'

export default {
  setup(props, { emit }) {
    const { value } = toRefs(props)
    const onChangeValue = (field: string, newValue: any) => {
      emit('input', {
        ...value.value,
        [field]: newValue,
      })
    }
    return {
      onChangeValue,
    }
  },
}
