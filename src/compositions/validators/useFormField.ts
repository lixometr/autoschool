import { AnySchema, BaseSchema } from "yup";

export default function useFormField (defaultValue: string, validators: BaseSchema) {
    return [defaultValue, validators]
}