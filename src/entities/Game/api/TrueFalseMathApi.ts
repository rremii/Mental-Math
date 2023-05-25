import { Api } from "@shared/api/config/Api"
import { DefaultResponse } from "@entities/User/types"
import { AmountOfBestUsers } from "@entities/Game/constants"
import { UserTrueFalseMath } from "@entities/Game/types"

export const TrueFalseMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateTrueFalseMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "true-false-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results", "BestTrueFalseMath"]
    }),

    getTrueFalseMathBestUsers: build.query<UserTrueFalseMath[], void>({
      query: () => ({
        url: "true-false-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BestTrueFalseMath"]
    })


  }),
  overrideExisting: false
})
// export const {getQuickMathResult} = HardMathApi.endpoints
export const { useGetTrueFalseMathBestUsersQuery, useUpdateTrueFalseMathScoreMutation } = TrueFalseMathApi
