import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import Header from "@widgets/Header/ui/Header"
import styled from "styled-components"
import { LoginMenu } from "@widgets/LoginMenu"
import background from "@shared/assets/DarkTheme/background.png"
import { SignUpMenu } from "@widgets/SignUpMenu"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"

const SignUpPage = () => {

  return <SignUpLayout>
    <Header />
    <SignUpMenu />
  </SignUpLayout>
}
export default SignUpPage
const SignUpLayout = styled.div`
  position: relative;
  overflow-y: auto;
  min-height: 100vh;
  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
`
