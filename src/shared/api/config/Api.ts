import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { $api, $apiDefault, API_URL } from "./index"
import { AxiosInstance, AxiosRequestConfig } from "axios"

interface ApiError {
  message: string
  name: string
  options: {}
  response: { statusCode: number, message: string, error: string }
  status: number
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig["method"]
    data?: AxiosRequestConfig["data"]
    params?: AxiosRequestConfig["params"],
    withInterceptors?: boolean  //use default axios, instead of custom with interceptors
  },
    unknown,
    ApiError> =>
    async ({ url, method, data, params, withInterceptors }) => {

      let result
      if (withInterceptors)
        result = await $api({ url: baseUrl + url, method, data, params })
      else
        result = await $apiDefault({ url: baseUrl + url, method, data, params })
      return { data: result.data }

    }

export const Api = createApi({
    reducerPath: "chatApiRtk",
    baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({})
  }
)
