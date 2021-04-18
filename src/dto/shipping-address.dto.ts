import { Expose } from "class-transformer"

export class ShippingAddressDto {
    @Expose({name: 'country_id'})
    country: number
    @Expose({name: 'state_id'})
    state: number
    @Expose({name: 'city_id'})
    city: number
    @Expose({name: 'zip'})
    zipCode: string
    address: string[]
    @Expose({name: 'full_name'})
    fullName?: string
}