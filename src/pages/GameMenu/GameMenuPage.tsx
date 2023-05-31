import styled from "styled-components"
import DarkBackground from "@shared/assets/DarkTheme/background.avif"
import LightBackground from "@shared/assets/LightTheme/background.avif"
import React, { useEffect } from "react"
import { GameMenu, Header } from "@widgets/GameMenu"
import { SettingsMenu } from "@widgets/SettingsMenu"
import { AvatarChangeMenu } from "@widgets/AvatarChangeMenu"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useChangeTheme } from "@entities/Settings"
import { useRestartGame } from "@entities/Game"


const GameMenuPage = () => {
  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)

  const { ResetGame } = useRestartGame()
  useEffect(() => {
    ResetGame()
  }, [])

  return <GameMenuLayout isDarkMode={isDarkMode}>
    <AvatarChangeMenu />
    <SettingsMenu />
    <Header />
    <GameMenu />
  </GameMenuLayout>
}
export default GameMenuPage
const GameMenuLayout = styled.main<{
  isDarkMode: boolean
}>`
  position: relative;
  min-height: 100vh;
  height: 100%;
  //height: min-content;
  max-width: 600px;
  width: 100%;
  overflow-x: hidden !important;
  background-image: url("${({ isDarkMode }) => isDarkMode ? DarkBackground : LightBackground}");

  background-size: cover;
  display: flex;
  //overflow-y: auto;
  flex-direction: column;
`
