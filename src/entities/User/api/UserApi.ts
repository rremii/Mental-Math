import { Api } from "@shared/api/config/Api"
import { ChangeAvatarDto, ChangeNameDto, DefaultResponse, GameResults, User } from "@entities/User/types"
import { QuickMathApi } from "@entities/QuickMath"

export const UserApi = Api.injectEndpoints({

  endpoints: (build) => ({

    changeName: build.mutation<DefaultResponse, ChangeNameDto>({
      query: (data) => ({
        url: "users/name",
        method: "POST",
        data
      }),

      invalidatesTags: ["User"]
    }),
    changeAvatar: build.mutation<DefaultResponse, ChangeAvatarDto>({
      query: (data) => ({
        url: "users/avatar",
        method: "POST",
        data
      }),

      invalidatesTags: ["User"]
    }),


    getUser: build.query<User, void>({
      query: () => ({
        url: "users",
        method: "GET"
      }),
      providesTags: ["User"]
    }),

    getGameResults: build.query<GameResults, { id?: number }>({
      query: ({ id }) => ({
        url: "users/results/" + id,
        method: "GET"
      }),
      providesTags: ["Results"]
    })


  }),
  overrideExisting: false
})
// export const { getGameResults } = UserApi.endpoints
export const {
  useGetGameResultsQuery,
  useGetUserQuery,
  useChangeNameMutation,
  useChangeAvatarMutation
} = UserApi
