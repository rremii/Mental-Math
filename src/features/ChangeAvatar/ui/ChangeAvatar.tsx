import styled from "styled-components"
import NoAvatarIcon from "@shared/assets/NoAvatarIcon.svg"

export const ChangeAvatar = () => {
  return <ChangeAvatarLayout>
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
