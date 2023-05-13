import { Api } from "@shared/api/config/Api"
import { ChangeAvatarDto, ChangeNameDto, DefaultResponse, User } from "@entities/User/types"

export const QuickMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateQuickMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "quick-math/result",
        method: "PUT",
        data
      }),

      invalidatesTags: ["Game-results"]
    })
    // changeAvatar: build.mutation<DefaultResponse, ChangeAvatarDto>({
    //   query: (data) => ({
    //     url: "users/avatar",
    //     method: "POST",
    //     data
    //   }),
    //
    //   invalidatesTags: ["User"]
    // }),
    //
    //
    // getQuickMathResult: build.query<{ score: number }, { id: number }>({
    //   query: ({ id }) => ({
    //     url: `quick-math/${id}`,
    //     method: "GET"
    //   })
    // providesTags: ["User"]
    // })


  }),
  overrideExisting: false
})
// export const {getQuickMathResult} = QuickMathApi.endpoints
export const { useUpdateQuickMathScoreMutation } = QuickMathApi
