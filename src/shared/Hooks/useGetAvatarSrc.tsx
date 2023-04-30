import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { AvatarSrc } from "@shared/Constants/AvatarsSrc"
import { useGetUserQuery } from "@entities/User/api/UserApi"

export const UseGetAvatarSrc = () => {
  const avatar = useTypedSelector(state => state.AvatarMenu.avatar)
  const isLoggedIn = useTypedSelector(state => state.Auth.isLoggedIn)

  const { data: user } = useGetUserQuery(undefined, {
    skip: isLoggedIn !== "success"
  })

  return { avatarSrc: AvatarSrc.get(user?.avatar || avatar) }

}
