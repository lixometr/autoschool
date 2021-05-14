import { Type } from "class-transformer";
class UpdatePart {
    id: number
    order: number
}
export class UpdateCoursePartOrderDto {
    @Type(() => UpdatePart)
    parts: UpdatePart[]
}