import useApi, { UseApiOptions } from '@/compositions/useApi'
import useTransfomer from '@/compositions/useTransfomer'
import { CreateCoursePartDto } from '@/dto/course-editor/create-course-part.dto'
import { CreateCourseUnitDto } from '@/dto/course-editor/create-course-unit.dto'
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
      method: 'GET',
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<CourseEditorPartEntity>>) => {
      return plainToClass(CourseEditorPartEntity, data.data)
    },
  )

export const useApiCreateCoursePart = (opts?: UseApiOptions) =>
  useApi<CreateCoursePartDto, any>(
    (data: CreateCoursePartDto) => ({
      url: `/v1/course`,
      method: 'POST',
      data: useTransfomer(CreateCoursePartDto, data),
    }),
    opts,
  )
export const useApiCreateUnit = (opts?: UseApiOptions) =>
  useApi<CreateCourseUnitDto, any>(
    (data: CreateCourseUnitDto) => ({
      url: `/v1/course`,
      method: 'POST',
      data: useTransfomer(CreateCourseUnitDto, data),
    }),
    opts,
  )

export const useApiUpdateCoursePart = (opts?: UseApiOptions) =>
  useApi<{ id: number }, any>(
    ({ id }) => ({
      url: `/v1/course/${id}`,
      method: 'PUT',
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

export const useApiGetUnits = (opts?: UseApiOptions) =>
  useApi<any, CourseEditorUnitEntity[]>(
    () => ({
      url: '/v1/course/units',
      method: 'GET',
    }),
    opts,
    ({ data }: AxiosResponse<DataResponse<CourseEditorUnitEntity[]>>) => {
      return data.data
    },
  )

export const useApiUpdateUnitsOrder = (opts?: UseApiOptions) =>
  useApi<any, any>(
    () => ({
      url: '/v1/course/update',
      method: 'PUT',
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
