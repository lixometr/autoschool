import useApi, { UseApiOptions } from '@/compositions/useApi'
import useTransfomer from '@/compositions/useTransfomer'
import { CreateCoursePartDto } from '@/dto/course-editor/create-course-part.dto'
import { CreateCourseUnitDto } from '@/dto/course-editor/create-course-unit.dto'
import { UpdateCoursePartOrderDto } from '@/dto/course-editor/update-course-part-order.dto'
import { CourseEditorPartEntity } from '@/models/course-editor/course-editor-part.entity'
import { CourseEditorUnitEntity } from '@/models/course-editor/course-editor-unit.entity'
import { DataResponse } from '@/models/data.response'
import { AxiosResponse } from 'axios'
import { plainToClass } from 'class-transformer'

export const useApiGetCourse = (opts?: UseApiOptions) =>
  useApi<any, any>(
    () => ({
      url: '/v1/course',
      method: 'GET',
    }),
    opts,
  )
export const useApiGetCoursePart = (opts?: UseApiOptions) =>
  useApi<{ id: number }, CourseEditorPartEntity>(
    ({ id }) => ({
      url: `/v1/course/${id}`,
      params: {
        include: 'tasks',
      },
      method: 'GET',
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<any>>) => {
      const part = { ...data.data }
      part.tasks = part.tasks?.data
      return plainToClass(CourseEditorPartEntity, part)
    },
  )

export const useApiCreateCoursePart = (opts?: UseApiOptions) =>
  useApi<CreateCoursePartDto, { id: number }>(
    (data: CreateCoursePartDto) => ({
      url: `/v1/course`,
      method: 'POST',
      data: useTransfomer(CreateCoursePartDto, data),
    }),
    opts,
    ({ data }: AxiosResponse<{ meta: { i13n: { entity: number } } }>) => {
      return { id: data?.meta?.i13n?.entity }
    },
  )

export const useApiCreateUnit = (opts?: UseApiOptions) =>
  useApi<CreateCourseUnitDto, { id: number }>(
    (data: CreateCourseUnitDto) => ({
      url: `/v1/course`,
      method: 'POST',
      data: useTransfomer(CreateCourseUnitDto, data),
    }),
    opts,
    ({ data }: AxiosResponse<{ meta: { i13n: { entity: number } } }>) => {
      return { id: data?.meta?.i13n?.entity }
    },
  )
export const useApiUpdateUnit = (opts?: UseApiOptions) =>
  useApi<{ data: CreateCourseUnitDto; id: number }, any>(
    ({ data, id }) => ({
      url: `/v1/course/${id}`,
      method: 'PUT',
      data: useTransfomer(CreateCourseUnitDto, data),
    }),
    opts,
  )
export const useApiUpdateUnitTime = (opts?: UseApiOptions) =>
  useApi<{ passingTime: number; id: number }, any>(
    ({ id, passingTime }) => ({
      url: `/v1/course/${id}`,
      method: 'PUT',
      data: {
        passing_time: passingTime,
      },
    }),
    opts,
  )

export const useApiUpdateCoursePart = (opts?: UseApiOptions) =>
  useApi<{ id: number; data: CourseEditorPartEntity }, any>(
    ({ id, data }) => ({
      url: `/v1/course/${id}`,
      method: 'PUT',
      data: useTransfomer(CourseEditorPartEntity, data),
    }),
    opts,
  )
export const useApiDeleteCoursePart = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      url: `/v1/course/${id}`,
      method: 'DELETE',
    }),
    opts,
  )
export const useApiDeleteUnit = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      url: `/v1/course/${id}`,
      method: 'DELETE',
    }),
    opts,
  )

export const useApiGetUnits = (opts?: UseApiOptions) =>
  useApi<any, CourseEditorUnitEntity[]>(
    () => ({
      url: '/v1/course',
      params: {
        include: 'pages',
      },
      method: 'GET',
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<any>>) => {
      let units = [...data.data]
      units = units.map((unit: any) => {
        unit.pages = unit.pages.data
        return unit
      })
      const items = units.map((unit: CourseEditorUnitEntity) => {
        return plainToClass(CourseEditorUnitEntity, unit)
      })
      return items
    },
  )

export const useApiUpdatePartsOrder = (opts?: UseApiOptions) =>
  useApi<UpdateCoursePartOrderDto, any>(
    (data) => ({
      url: '/v1/course/update',
      method: 'PUT',
      data: useTransfomer(UpdateCoursePartOrderDto, data),
    }),
    opts,
  )

export const useApiSaveCoursePrgress = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      url: `/v1/course/save/${id}`,
      method: 'POST',
    }),
    opts,
  )
