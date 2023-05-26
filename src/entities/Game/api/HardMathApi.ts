import { Api } from "@shared/api/config/Api"
import { DefaultResponse } from "@entities/User"
import { AmountOfBestUsers } from "@entities/Game/constants"
import { UserHardMath } from "@entities/Game/types"

export const HardMathApi = Api.injectEndpoints({

  endpoints: (build) => ({

    updateHardMathScore: build.mutation<DefaultResponse, { newScore: number, userId: number }>({
      query: (data) => ({
        url: "hard-math/result",
        method: "PUT",
        data
      }),
      invalidatesTags: ["Results", "BestHardMath"]
    }),

    getHardMathBestUsers: build.query<UserHardMath[], void>({
      query: () => ({
        url: "hard-math/best/" + AmountOfBestUsers,
        method: "GET"
      }),
      providesTags: ["BestHardMath"]
    })


  }),
  overrideExisting: false
})
export const { useUpdateHardMathScoreMutation, useGetHardMathBestUsersQuery } = HardMathApi
