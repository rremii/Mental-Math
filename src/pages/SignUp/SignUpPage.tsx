import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"
import { Header, SignUpMenu } from "@widgets/SignUpMenu"
import React from "react"
import { AvatarChangeMenu } from "@widgets/AvatarChangeMenu"

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
  //height: min-content;

  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
`
