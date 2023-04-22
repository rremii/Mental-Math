import styled from "styled-components"
import NoAvatarIcon from "@shared/assets/DarkTheme/avatars/NoAvatarIcon.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAvatarMenuOpen } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"
import { UseGetAvatarSrc } from "@shared/Hooks/useGetAvatarSrc"

export const ChangeAvatar = () => {
  const dispatch = useAppDispatch()
  const avatar = useTypedSelector(state => state.AvatarMenu.avatar)

  const OpenAvatarMenu = () => {
    dispatch(setAvatarMenuOpen(true))
  }
  const { avatarSrc } = UseGetAvatarSrc(avatar)


  return <ChangeAvatarLayout className="ChangeAvatar" onClick={OpenAvatarMenu}>
    <img src={avatarSrc} alt="ChangeAvatarLayout" />
  </ChangeAvatarLayout>
}
const ChangeAvatarLayout = styled.button`

  width: 125px;
  height: 125px;

  img {
    width: 100%;
  }

`
