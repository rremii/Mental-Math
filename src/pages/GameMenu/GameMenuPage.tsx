import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"
import SettingsMenu from "@widgets/SettingsMenu/ui/SettingsMenu"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"
import React from "react"
import Header from "@widgets/GameMenu/ ui/Header"

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
