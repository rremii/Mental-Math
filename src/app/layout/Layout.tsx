import styled from "styled-components"
import React, { FC } from "react"
import { Toast } from "@shared/ui/Toast"

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
