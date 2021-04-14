import { AxiosError } from "axios"


const errHandler = (err: AxiosError) => {
    if (err) {
        const response = err.response 
        if (response.status === 401) {
            return 'Пожалуйста авторизируйтесь'
        }
        if(response.status === 413) {
            return 'Вы пытаетесь загрузить слишком большой файл, попробуйте загрузить поменьше'
        }
        if (response.data && response.data.error) {
            return response.data.error?.message
        }
    }
}
const errorFactory = () => {
    return errHandler
}
export const errorHandler = errorFactory