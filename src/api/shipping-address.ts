import useApi, { UseApiOptions } from "@/compositions/useApi"
import useTransfomer from "@/compositions/useTransfomer"
import { ShippingAddressDto } from "@/dto/shipping-address.dto"

export const useApiSendShippingAddress = (opts?: UseApiOptions) => useApi<ShippingAddressDto, any>(
    (data: ShippingAddressDto) => ({
        url: '/v1/shipping-address',
        method: "POST",
        data: useTransfomer(ShippingAddressDto, data),
    }),
    opts
)