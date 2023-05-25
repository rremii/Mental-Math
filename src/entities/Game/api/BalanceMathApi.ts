import { Api } from "@shared/api/config/Api"
import { DefaultResponse } from "@entities/User/types"
import { AmountOfBestUsers } from "@entities/Game/constants"
import { UserBalanceMath, UserTrueFalseMath } from "@entities/Game/types"

export const BalanceMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateBalanceMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "balance-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results", "BalanceFalseMath"]
    }),

    getBalanceMathBestUsers: build.query<UserBalanceMath[], void>({
      query: () => ({
        url: "balance-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BalanceFalseMath"]
    })


  }),
  overrideExisting: false
})
// export const {getQuickMathResult} = HardMathApi.endpoints
export const { useGetBalanceMathBestUsersQuery, useUpdateBalanceMathScoreMutation } = BalanceMathApi
