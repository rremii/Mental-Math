import styled from "styled-components"
import { Header, LoginMenu } from "@widgets/LoginMenu"
import DarkBackground from "@shared/assets/DarkTheme/background.png"
import LightBackground from "@shared/assets/LightTheme/background.png"
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
  background-image: url("${({ isDarkMode }) => isDarkMode ? DarkBackground : LightBackground}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`
