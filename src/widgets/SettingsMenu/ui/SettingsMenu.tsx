import styled from "styled-components"
import { SettingsBox } from "./SettingsBox"
import { Header } from "./Header"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"

export const SettingsMenu = () => {
  const dispatch = useAppDispatch()

  const isSettingsMenuOpen = useTypedSelector(state => state.SettingsMenu.isSettingsMenuOpen)


  return <SettingsMenuLayout isActive={isSettingsMenuOpen}>
    <Header />
    <SettingsBox />
  </SettingsMenuLayout>
}
const SettingsMenuLayout = styled.div<{
  isActive: boolean
}>`
  position: fixed;
  z-index: 1;
  background-color: var(--default-menu-bg-color);
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;
  transition: 0.5s;
  transform: ${({ isActive }) => isActive ? "translateX(0)" : "translateX(100%)"};
  pointer-events: ${({ isActive }) => isActive ? "initial" : "none"};


`
