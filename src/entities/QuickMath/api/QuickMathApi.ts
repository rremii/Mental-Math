import { Api } from "@shared/api/config/Api"
import { ChangeAvatarDto, ChangeNameDto, DefaultResponse, User } from "@entities/User/types"
import { AmountOfBestUsers } from "@entities/QuickMath/constants"
import { UserQuickMath } from "@entities/QuickMath/types"

export const QuickMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateQuickMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "quick-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results"]
    }),

    getBestUsers: build.query<UserQuickMath[], void>({
      query: () => ({
        url: "quick-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BestUsers"]
    })


  }),
  overrideExisting: false
})
// export const {getQuickMathResult} = QuickMathApi.endpoints
export const { useUpdateQuickMathScoreMutation, useGetBestUsersQuery } = QuickMathApi
