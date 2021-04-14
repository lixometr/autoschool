import { classToPlain, plainToClass } from "class-transformer";

export default function useTransfomer(classDto, values) {
    const classValues = plainToClass(classDto, values)
    return classToPlain(classValues)
}