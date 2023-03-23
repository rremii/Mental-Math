import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { API_URL } from "./index"


export const Api = createApi({
    reducerPath: "chatApiRtk",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({})
  }
)
