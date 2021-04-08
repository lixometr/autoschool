import useField from "./validators/useField"

export default function useOptionalFields({ validators, onlyOne = false }) {
    const group: any = {}
    const resetOthers = (currentKey) => {
        Object.keys(group).map(key => {
            if (key !== currentKey) {
                group[key].value.value = null
            }
        })
    }
    const haveValueInOther = (currentKey) => {
        return Object.keys(group).some(key => {
            if (key !== currentKey) {
                if(group[key].value.value) return true
            }
        })
    }
    Object.keys(validators).map(key => {
        const validator = validators[key]
        group[key] = useField(null, [validator.test('', 'Заполните одно из полей', value => {
            setTimeout(() => {
                if (group[key].value.value && onlyOne) {
                    resetOthers(key)
                    return true
                }
            }, 0)
            if (value) return true
            if (haveValueInOther(key)) {
                return true
            }
            return false
        })], { watchValue: true })
    })
    return {
        group
    }
}