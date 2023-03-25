import { LoginForm } from "@entities/Auth"
import styled from "styled-components"
import { ChangeAvatar } from "@features/ChangeAvatar"

export const LoginMenu = () => {
  return <LoginMenuLayout>
    <div className="change-avatar-box">
      <ChangeAvatar />
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

  .change-avatar-box {
    width: 280px;
    display: flex;
    justify-content: flex-end;
  }
`
