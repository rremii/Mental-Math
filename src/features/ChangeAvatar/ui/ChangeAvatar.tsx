import styled from "styled-components"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setAvatarMenuOpen, useGetAvatarSrc } from "@entities/Avatar"

export const ChangeAvatar = () => {
  const dispatch = useAppDispatch()


  const OpenAvatarMenu = () => {
    dispatch(setAvatarMenuOpen(true))
  }
  const { avatarSrc } = useGetAvatarSrc()


  return <ChangeAvatarLayout className="ChangeAvatar" onClick={OpenAvatarMenu}>
    <img src={avatarSrc} alt="Avatar" />
  </ChangeAvatarLayout>
}
const ChangeAvatarLayout = styled.button`

  width: 125px;
  height: 125px;

  img {
    height: 100%;
    width: 100%;
  }

`
