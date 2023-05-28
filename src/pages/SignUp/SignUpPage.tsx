import styled from "styled-components"
import DarkBackground from "@shared/assets/DarkTheme/background.png"
import LightBackground from "@shared/assets/LightTheme/background.png"
import { Header, SignUpMenu } from "@widgets/SignUpMenu"
import React from "react"
import { AvatarChangeMenu } from "@widgets/AvatarChangeMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

const SignUpPage = () => {

  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)


  return <SignUpLayout isDarkMode={isDarkMode}>
    <AvatarChangeMenu />
    <Header />
    <SignUpMenu />
  </SignUpLayout>

}
export default SignUpPage
const SignUpLayout = styled.div<{
  isDarkMode: boolean
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  //height: min-content;
  max-width: 600px;
  width: 100%;
  background-image: url("${({ isDarkMode }) => isDarkMode ? DarkBackground : LightBackground}");
  background-size: cover;
`
