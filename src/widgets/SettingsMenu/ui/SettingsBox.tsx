import styled from "styled-components"
import { FC } from "react"
import { ChangeAvatar } from "@features/ChangeAvatar"
import { ChangeName } from "@features/ChangeName"
import { ToggleTheme } from "@features/ToggleTheme"


export const SettingsBox: FC = () => {

  return <SettingsBoxLayout>
    <ChangeAvatar />
    <ChangeName />
    <ToggleTheme />
  </SettingsBoxLayout>
}
const SettingsBoxLayout = styled.div`

  display: flex;
  flex-direction: column;
  //align-items: center;
  color: var(--main-text-color);
  padding: 24px 30px;
  gap: 20px;
  height: 100%;

  .ChangeAvatar {
    width: 100%;
    height: max-content;
    margin-bottom: 10px;

    img {
      width: 50% !important;
    }
  }

`
