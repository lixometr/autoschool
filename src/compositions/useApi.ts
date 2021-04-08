import { Ref, ref, watch } from "@vue/composition-api";
import useAxios from '@/compositions/useAxios'
import { AxiosError, AxiosRequestConfig } from "axios";
import useGlobalLoading from "./useGlobalLoading";
import useToast from "./useToast";
import { errorHandler } from "@/helpers/error-handler";
export interface ToastMessages {
    error?: (err: any) => string
    success?: (result: any) => string
}
export interface UseApiOptions {
    toast?: boolean | ToastMessages
    loading?: boolean
}
const axios = useAxios()
export default function useApi<T, R extends any>(
    factory: (opts: T) => AxiosRequestConfig,
    options: UseApiOptions = { toast: false, loading: false },
    handleResponse = async (data: any): Promise<R> => data.data,
) {
    const isLoading = ref(false);
    const result: Ref<R> = ref(null);
    const error: Ref<any> = ref(null);
    const exec = async (args?: T) => {
        const request = factory(args);
        isLoading.value = true;
        error.value = null;
        try {
            const response = await axios(request);
            const valueResponse: R = await handleResponse(response)
            result.value = valueResponse;
            return valueResponse;
        } catch (e) {
            if (e.isAxiosError == true) {
                error.value = e
            } else {
                console.log('strange error ', e)
                error.value = e
            }
            result.value = null;
        } finally {
            isLoading.value = false;
        }
    };
    if (options.loading) {
        const globalLoading = useGlobalLoading()
        watch(isLoading, value => {
            if (value) {
                globalLoading.show()
            } else {
                globalLoading.hide()
            }
        })
    }
    if (options.toast) {
        const defaultSerializers = {
            success: (data) => data,
            error: errorHandler()
        }
        let messageSerializers = defaultSerializers
        if (typeof options.toast === 'object') {
            messageSerializers = Object.assign({}, defaultSerializers, options.toast)
        }
        watch(error, (value: AxiosError) => {
            const toast = useToast()
            if (value) {
                if (typeof options.toast === 'object' && options.toast.error
                    || typeof options.toast === 'boolean' && options.toast === true) {
                    toast.error({
                        message: messageSerializers.error(value)
                    })
                }

            }
        })
        watch(result, (value: R) => {
            const toast = useToast()
            if (value) {
                if (typeof options.toast === 'object' && options.toast.success
                    || typeof options.toast === 'boolean' && options.toast === true) {
                    toast.success({
                        message: messageSerializers.success(value)
                    })
                }

            }
        })
    }
    return {
        isLoading,
        result,
        error,
        exec,
    };
}