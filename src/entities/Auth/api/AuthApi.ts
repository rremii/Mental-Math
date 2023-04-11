import { Api } from "@shared/api/config/Api"
import { AuthResponse, LoginDto, RegisterDto } from "@entities/Auth/types"

export const AuthApi = Api.injectEndpoints({

  endpoints: (build) => ({

    register: build.mutation<AuthResponse, RegisterDto>({
      query: (registerData) => ({
        url: "auth/register",
        method: "POST",
        data: registerData
      })

      // invalidatesTags: ["Message"]
    }),
    login: build.mutation<AuthResponse, LoginDto>({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        data: loginData
      }),

    }),

    refresh: build.query<AuthResponse, void>({
      query: () => ({
        url: "auth/refresh",
        method: "GET",
      }),

    })

    // getAllMessages: build.query <message[], { chat_id: number | null, user_id: number }>({
    //   query: ({chat_id, user_id}) => ({
    //     url: "messages/" + chat_id + "/" + user_id,
    //     method: "GET"
    //   }),
    //   providesTags: ["Message"],
    // }),
    //
    // addMessage: build.mutation<message, messageData>({
    //   query: (messageData) => ({
    //     url: "messages",
    //     method: "POST",
    //     data: messageData
    //   }),
    //   invalidatesTags: ["Message"]
    // }),
    //
  }),
  overrideExisting: false
})
export const {refresh} = AuthApi.endpoints
export const {
  useRefreshQuery,
  useRegisterMutation,
  useLoginMutation
} = AuthApi
