import { ConfigModule } from "@/store/modules/config"
import { UserModule } from "@/store/modules/user"
import axios from "axios"
import useCookie from "./useCookie"
const cookie = useCookie()
export default function useAxios() {
    const baseURL = ConfigModule.baseApiUrl
    const $axios = axios.create({
        baseURL,
        withCredentials: false,
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxRedirects: 0
    })
    $axios.interceptors.request.use((config) => {
        const token = UserModule.token
    
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        // const csrf = cookie.get('XSRF-TOKEN')
        // console.log(csrf)
        // if(csrf) {
        //     config.headers['X-CSRF-TOKEN'] = csrf
        // }
        return config
    })
    return $axios
}