import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { $api, $apiDefault, API_URL } from "./index"
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"
import { ApiError } from "@shared/api/config/types"


const axiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): BaseQueryFn<{
  url: string
  method: AxiosRequestConfig["method"]
  data?: AxiosRequestConfig["data"]
  params?: AxiosRequestConfig["params"],
  withInterceptors?: boolean  //use default axios, instead of custom with interceptors
},
  unknown,
  ApiError> => async ({ url, method, data, params, withInterceptors = true }) => {
  try {

    let result
    if (withInterceptors)
      result = await $api({ url: baseUrl + url, method, data, params })
    else
      result = await $apiDefault({ url: baseUrl + url, method, data, params })
    return { data: result.data }

  } catch (axiosError) {
    const err = axiosError as AxiosError<ApiError>
    return {
      error: err.response?.data
    }
  }


}

export const Api = createApi({
    reducerPath: "chatApiRtk",
    baseQuery: axiosBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
    tagTypes: ["User"]
  }
)