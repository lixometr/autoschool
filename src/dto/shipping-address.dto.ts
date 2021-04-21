import { Expose } from 'class-transformer'

export class ShippingAddressDto {
  @Expose({ name: 'country_id', toPlainOnly: true })
  country: number
  @Expose({ name: 'state_id', toPlainOnly: true })
  state: number
  @Expose({ name: 'city_id', toPlainOnly: true })
  city: number
  @Expose({ name: 'zip', toPlainOnly: true })
  zipCode: string
  address: string[]
  @Expose({ name: 'full_name', toPlainOnly: true })
  fullName?: string
}
