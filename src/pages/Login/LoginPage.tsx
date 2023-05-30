import styled from "styled-components"
import { Header, LoginMenu } from "@widgets/LoginMenu"
import DarkBackground from "@shared/assets/DarkTheme/background.avif"
import LightBackground from "@shared/assets/LightTheme/background.avif"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

const LoginPage = () => {

  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)

  return <LoginLayout isDarkMode={isDarkMode}>
    <Header />
    <LoginMenu />
  </LoginLayout>
}
export default LoginPage
const LoginLayout = styled.div<{
  isDarkMode: boolean
}>`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  height: min-content;
  background-image: url("${({ isDarkMode }) => isDarkMode ? DarkBackground : LightBackground}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  //padding-bottom: 50px;
`
