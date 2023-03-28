import styled from "styled-components"
import NoAvatarIcon from "@shared/assets/NoAvatarIcon.svg"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setAvatarMenuOpen } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"

export const ChangeAvatar = () => {
  const dispatch = useAppDispatch()

  const OpenAvatarMenu = () => {
    dispatch(setAvatarMenuOpen(true))
  }

  return <ChangeAvatarLayout onClick={OpenAvatarMenu}>
    <img src={NoAvatarIcon} alt="ChangeAvatarLayout" />
  </ChangeAvatarLayout>
}
const ChangeAvatarLayout = styled.button`

  width: 125px;
  height: 125px;

  img {
    width: 100%;
  }

`
