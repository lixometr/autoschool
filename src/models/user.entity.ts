import { DataResponse } from "./data.response"
import { RoleEntity } from "./role.entity"

export class UserEntity {
    created_at:string
    email: string
    email_verified_at: string
    first_name: string
    last_name: string
    login: string
    middle_name: string
    id: number
    roles?: DataResponse<RoleEntity[]>
    verification_status: {
        personal_data_filled: boolean
        questions_answered: boolean
        shipping_address_filled: boolean
        keystroke_signature_enrolled: boolean
    }

    get role() {
        return this.roles?.data[0]
    }
}