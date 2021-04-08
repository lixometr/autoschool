import { computed, reactive, ref, Ref, watch } from "@vue/composition-api";
import { BaseSchema } from "yup";
import { UseFieldModel } from "./useField";
import * as yup from "yup"

interface UseFormParams<T> {
    watchAfterSubmit?: boolean,
    // rename?: {
    //     [key: string]: keyof T
    // },
}

interface UseFormFields {
    [key: string]: [any, BaseSchema]
}
export default function useForm<T extends UseFormFields>(fields: T, params?: UseFormParams<T>) {
    const defaultValues: UseFormParams<T> = {
        watchAfterSubmit: true,
        // rename: {} as { [key: string]: keyof T }
    }
    const { watchAfterSubmit } = Object.assign({}, defaultValues, params)
    let plainValues = {} as { [key in keyof T]: any }
    let plainErrors = {} as { [key in keyof T]: string[] }
    const validators = {} as { [key in keyof T]: BaseSchema }
    const isValid = ref(false)
    const isSubmit = ref(false)
    const isSubmiting = ref(false)
    Object.keys(fields).map((key: keyof T) => {
        const field = fields[key]
        plainValues[key] = field[0]
        plainErrors[key] = []
        validators[key] = field[1]
    })
    const values = reactive<{ [key in keyof T]: any }>(plainValues)
    const errors = ref<{ [key in keyof T]: string[] }>(plainErrors)

    const validate = async () => {
        const newErrors = {} as { [key in keyof T]: string[] }
        Object.keys(errors.value).map((key: keyof T) => {
            newErrors[key] = []
        })
        let isValid: any | undefined
        try {
            isValid = await yup.object().shape(validators).validate(values, { abortEarly: false })
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                err.inner.map(innerErr => {
                    newErrors[innerErr.path as keyof T] = innerErr.errors
                })
            }
        }
        errors.value = newErrors
        if (isValid) return true
        return false

        // const boolArray = await Promise.all(resolvers)
        // return !boolArray.includes(false)
    }
    const handleSubmit = (cb: any) => {
        return async (...params: any) => {
            isSubmit.value = true
            await validate()
            if (!isValid.value) return
            if (isSubmiting.value) return
            isSubmiting.value = true
            await cb(...params)
            isSubmiting.value = false
        }
    }

    const serialize = () => {
        return values
    }

    watch(errors, (newErrors: any) => {
        const boolArray = Object.keys(newErrors).map(key => {
            const currentErrors = newErrors[key]
            return currentErrors.length < 1
        })
        isValid.value = !boolArray.includes(false)
    })
    watch(isSubmit, () => {
        if (isSubmit && watchAfterSubmit) {
            watch(() => values, newValues => {
                validate()
            }, {deep: true})
        }
    })


    return { values, errors, isValid, handleSubmit, validate, serialize, isSubmit }
}
