import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import Header from "@widgets/Header/ui/Header"
import styled from "styled-components"
import { LoginMenu } from "@widgets/LoginMenu"
import background from "@shared/assets/DarkTheme/background.png"

const LoginPage = () => {


  return <LoginLayout>
    <Header />
    <LoginMenu />
  </LoginLayout>
}
export default LoginPage
const LoginLayout = styled.div`
  //height: 100%;
  height: min-content;
  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`
