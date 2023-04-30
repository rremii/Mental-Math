import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useGetUserQuery } from "@entities/User/api/UserApi"
import { AvatarSrc } from "@entities/Avatar"

export const useGetAvatarSrc = () => {
  const avatar = useTypedSelector(state => state.AvatarMenu.avatar)
  const isLoggedIn = useTypedSelector(state => state.Auth.isLoggedIn)

  const { data: user } = useGetUserQuery(undefined, {
    skip: isLoggedIn !== "success"
  })

  return { avatarSrc: AvatarSrc.get(user?.avatar || avatar) }

}
