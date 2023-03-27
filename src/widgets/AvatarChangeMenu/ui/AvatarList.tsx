import styled from "styled-components"
import { FC, ReactNode } from "react"

interface props {
  children: ReactNode
}

export const AvatarList: FC<props> = ({ children }) => {
  return <AvatarListLayout>
    {children}
  </AvatarListLayout>
}
const AvatarListLayout = styled.div`


`
