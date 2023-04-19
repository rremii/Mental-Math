import styled from "styled-components"
import { FC, ReactNode } from "react"

interface props {
  // children: ReactNode
}

export const SettingsBox: FC<props> = () => {
  return <AvatarListLayout>

  </AvatarListLayout>
}
const AvatarListLayout = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px 30px;
  gap: 20px;

`
