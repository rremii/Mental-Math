import styled from "styled-components"
import { FC, ReactNode } from "react"
import { ChangeAvatar } from "@features/ChangeAvatar"
import { LabelWithEdit } from "@shared/ui/LabelWithEdit"
import { ChangeName } from "@features/ChangeName/ui/ChangeName"

interface props {
  // children: ReactNode
}

export const SettingsBox: FC<props> = () => {

  return <SettingsBoxLayout>
    <ChangeAvatar />
    <ChangeName />
  </SettingsBoxLayout>
}
const SettingsBoxLayout = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
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
