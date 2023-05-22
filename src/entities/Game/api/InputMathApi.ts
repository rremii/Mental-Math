import { Api } from "@shared/api/config/Api"
import { DefaultResponse } from "@entities/User/types"
import { AmountOfBestUsers } from "@entities/Game/constants"
import {  UserInputMath } from "@entities/Game/types"

export const InputMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateInputMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "input-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results", "BestInputMath"]
    }),

    getInputMathBestUsers: build.query<UserInputMath[], void>({
      query: () => ({
        url: "input-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BestInputMath"]
    })


  }),
  overrideExisting: false
})
// export const {getQuickMathResult} = HardMathApi.endpoints
export const { useGetInputMathBestUsersQuery, useUpdateInputMathScoreMutation } = InputMathApi