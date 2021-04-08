import { Ref, ref, watch } from "@vue/composition-api";
import { BaseSchema, ValidationError } from "yup"
interface UseFieldOptions {
    onValidate?: (errors: string[], value: any) => any
    onInput?: (value: any) => any
    watchValue?: boolean
}
export interface UseFieldModel {
    value: Ref<any>
    errors: Ref<Array<string>>
    isValid: Ref<boolean>
    validate: (...args: any) => any
}
const defaultOptions: UseFieldOptions = {
    onValidate: (errors, value) => value,
    onInput: (value) => value,
    watchValue: false
}

type UseFieldValidators = Array<any | BaseSchema>
export default function useField(defaultValue: string | boolean | number | any = '', validators: UseFieldValidators, options?: UseFieldOptions): UseFieldModel {
    const { onValidate, onInput, watchValue,  } = Object.assign({}, defaultOptions, options)
    const value = ref(defaultValue)
    const errors: Ref<Array<string>> = ref([])
    const validate = async () => {
        const resolvers = validators.map(async validator => {
            try {
                if (validator instanceof BaseSchema) {
                    await validator.validate(value.value)
                    return true
                } else {
                    return await validator(value.value)
                }
            } catch (err) {
                if (err instanceof ValidationError) {
                    return err.errors
                }
                return err
            } finally {
                onValidate(errors.value, value.value)
            }
        })
        let ers = await Promise.all(resolvers)
        ers = ers.reduce((arr, item) => {
            if (Array.isArray(item)) {
                return arr.concat(item)
            }
            arr.push(item)
            return arr
        }, [])
        ers = ers.filter(error => error !== true)
        errors.value = ers
        return errors.value.length < 1
    }
    if (watchValue) {
        watch(value, async val => {
            await validate()
        })
    }
    const isValid = ref(true)
    watch(errors, newErrors => {
        isValid.value = errors.value.length > 0
    })

    watch(value, () => {
        onInput(value.value)
    })


    return { value, errors, isValid, validate }
}