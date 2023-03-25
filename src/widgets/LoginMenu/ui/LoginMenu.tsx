import { LoginForm } from "@entities/Auth"
import styled from "styled-components"
import { ChangeAvatar } from "@features/ChangeAvatar"
import { TypeWriter } from "@shared/ui/TypeWriter"

//https://codesandbox.io/s/nervous-colden-doq9b?from-embed=&file=/src/styles.css:58-145
const HelloTitle = `
Welcome back, please 
  login to continue
    your journey..
  `
export const LoginMenu = () => {

  return <LoginMenuLayout>
    <div className="typing-text-box">
      {/*  <ChangeAvatar />*/}
      <TypeWriter content={HelloTitle} speed={100} />
      {/*<TypeWriter>*/}
      {/*  Login to continue your jurney*/}
      {/*</TypeWriter>*/}
    </div>
    <LoginForm />
  </LoginMenuLayout>
}
const LoginMenuLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-evenly;
  max-height: 100%;
  gap: 62px;
  padding-top: 50px;
  padding-bottom: 50px;

  .typing-text-box {
    min-height: 150px;
  }

`
