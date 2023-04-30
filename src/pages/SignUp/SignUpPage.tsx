import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"
import { SignUpMenu } from "@widgets/SignUpMenu"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"
import React from "react"
import Header from "@widgets/SignUpMenu/ui/Header"

const SignUpPage = () => {

  return <SignUpLayout>
    <AvatarChangeMenu />
    <Header />
    <SignUpMenu />
  </SignUpLayout>

}
export default SignUpPage
const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  min-height: 100vh;
  height: min-content;

  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
`
