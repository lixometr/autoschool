import { Expose } from "class-transformer"

export class PersonalDataDto {
    @Expose({name: "last_name", toPlainOnly: true})
    lastName: string
    @Expose({name: "first_name", toPlainOnly: true})
    firstName: string
    @Expose({name: "middle_name", toPlainOnly: true})
    middleName: string
    @Expose({name: "id_class", toPlainOnly: true})
    classOfPermit: string
    @Expose({name: "expired_at", toPlainOnly: true})
    expDate: string
    @Expose({name: "birth_date", toPlainOnly: true})
    birthday: string
    @Expose({name: "id_number", toPlainOnly: true})
    idNumber: string
    @Expose({name: "document_number", toPlainOnly: true})
    documentNumber: string
}