import { ref } from "@vue/composition-api"
import Vue from "vue"
import { LoaderComponent, PluginOptions } from "vue-loading-overlay"
export default function useLoading(opts?: PluginOptions) {
    let loader = Vue.$loading
    let loaderComponent: LoaderComponent
    const loading = ref(false)

    const show = () => {
        if (loaderComponent) return
        loaderComponent = loader.show(opts)
        loading.value = true
    }

    const hide = () => {
        if (!loaderComponent) return
        loaderComponent.hide()
        loader = Vue.$loading
        loaderComponent = null
        loading.value = false

    }
    return { show, hide, loading }
}