import { Api } from "@shared/api/config/Api"
import { AmountOfBestUsers } from "@entities/Game"
import { UserBalanceMath } from "@entities/Game/types"
import { DefaultResponse } from "@entities/User"

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
export const { useGetBalanceMathBestUsersQuery, useUpdateBalanceMathScoreMutation } = BalanceMathApi
