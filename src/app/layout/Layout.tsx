import styled from "styled-components"
import React, { FC } from "react"
import { Toast } from "@shared/ui/Toast"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"
import SettingsMenu from "@widgets/SettingsMenu/ui/SettingsMenu"

interface Props {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {

  return <LayoutStyles>
    <Toast />

    {children}
  </LayoutStyles>


}
export default Layout
const LayoutStyles = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
  //overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  //overflow-y: auto;

`
