import styled from "styled-components"
import NoAvatarIcon from "@shared/assets/DarkTheme/avatars/NoAvatarIcon.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAvatarMenuOpen } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"
import { UseGetAvatarSrc } from "@shared/Hooks/useGetAvatarSrc"
import { useGetUserQuery } from "@entities/User/api/UserApi"

export const ChangeAvatar = () => {
  const dispatch = useAppDispatch()


  const OpenAvatarMenu = () => {
    dispatch(setAvatarMenuOpen(true))
  }
  const { avatarSrc } = UseGetAvatarSrc()


  return <ChangeAvatarLayout className="ChangeAvatar" onClick={OpenAvatarMenu}>
    <img src={avatarSrc} alt="Avatar" />
  </ChangeAvatarLayout>
}
const ChangeAvatarLayout = styled.button`

  width: 125px;
  height: 125px;

  img {
    width: 100%;
  }

`
