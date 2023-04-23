import { LoginForm } from "@entities/Auth"
import styled from "styled-components"
import { ChangeAvatar } from "@features/ChangeAvatar"
import { SignUpForm } from "@entities/Auth/ui/SignUpForm"
import { useState } from "react"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"

export const SignUpMenu = () => {


  return <SignUpMenuLayout>
    <div className="change-avatar-box">
      <ChangeAvatar  />
    </div>
    <SignUpForm />
  </SignUpMenuLayout>
}
const SignUpMenuLayout = styled.main`
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
