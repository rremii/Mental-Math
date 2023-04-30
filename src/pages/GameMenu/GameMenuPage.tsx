import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"
import React from "react"
import { GameMenu, Header } from "@widgets/GameMenu"
import { SettingsMenu } from "@widgets/SettingsMenu"
import { AvatarChangeMenu } from "@widgets/AvatarChangeMenu"

const GameMenuPage = () => {


  return <GameMenuLayout>
    <AvatarChangeMenu />
    <SettingsMenu />
    <Header />
    <GameMenu />
  </GameMenuLayout>
}
export default GameMenuPage
const GameMenuLayout = styled.main`
  min-height: 100vh;
  height: min-content;
  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
`
