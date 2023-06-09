import { Api } from "@shared/api/config/Api"
import { DefaultResponse } from "@entities/User"
import { AmountOfBestUsers } from "@entities/Game"
import { UserQuickMath } from "@entities/Game/types"

export const QuickMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateQuickMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "quick-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results", "BestQuickMath"]
    }),

    getQuickMathBestUsers: build.query<UserQuickMath[], void>({
      query: () => ({
        url: "quick-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BestQuickMath"]
    })


  }),
  overrideExisting: false
})
export const { useUpdateQuickMathScoreMutation, useGetQuickMathBestUsersQuery } = QuickMathApi
