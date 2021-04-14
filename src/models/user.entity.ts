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
        personal_data_filled: false
        questions_answered: false
        shipping_address_filled: false
    }
}