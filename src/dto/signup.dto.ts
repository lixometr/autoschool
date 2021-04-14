import { Expose } from "class-transformer"

export class SignUpDto {
    // first_name: string
    // last_name: string
    // middle_name: string
    email: string
    @Expose({name: 'login', toPlainOnly: true})
    username: string
    password: string

    @Expose({name: "country_id", toPlainOnly: true})
    countryId?: number
    promocode?: string

    @Expose({name: 'first_name', toPlainOnly: true})
    firstName: string
    @Expose({name: 'last_name', toPlainOnly: true})
    lastName: string
    @Expose({name: 'middle_name', toPlainOnly: true})
    middleName: string
}