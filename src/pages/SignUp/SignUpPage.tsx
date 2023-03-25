import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import Header from "@widgets/Header/ui/Header"
import styled from "styled-components"
import { LoginMenu } from "@widgets/LoginMenu"
import background from "@shared/assets/DarkTheme/background.png"
import { SignUpMenu } from "@widgets/SignUpMenu"

const SignUpPage = () => {

  return <SignUpLayout>
    <Header />
    <SignUpMenu />
  </SignUpLayout>
}
export default SignUpPage
const SignUpLayout = styled.div`

  min-height: 100%;
  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
`
