import styled from "styled-components"
import NoAvatarIcon from "@shared/assets/NoAvatarIcon.svg"
import { FC } from "react"

interface props {
  src?: string
}

export const Avatar: FC<props> = ({ src }) => {


  return <AvatarLayout isActive={false}>
    <img src={src || NoAvatarIcon} alt="avatar" />
  </AvatarLayout>
}
const AvatarLayout = styled.div<{
  isActive: boolean
}>`
  //width: 100%;
  height: 150px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 150px;
    max-height: 150px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: ${({ isActive }) => isActive ? "brightness(1)" : "brightness(0.3)"};
  }
`
