import { Api } from "@shared/api/config/Api"
import { ChangeAvatarDto, ChangeNameDto, DefaultResponse, User } from "@entities/User/types"

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
    })


  }),
  overrideExisting: false
})
export const {} = UserApi.endpoints
export const { useGetUserQuery, useChangeNameMutation,useChangeAvatarMutation } = UserApi