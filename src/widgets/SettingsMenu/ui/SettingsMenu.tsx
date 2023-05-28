import styled from "styled-components"
import { SettingsBox } from "./SettingsBox"
import { Header } from "./Header"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

export const SettingsMenu = () => {

  const isSettingsMenuOpen = useTypedSelector(state => state.SettingsMenu.isSettingsMenuOpen)


  return <SettingsMenuLayout isActive={isSettingsMenuOpen}>
    <Header />
    <SettingsBox />
  </SettingsMenuLayout>
}
const SettingsMenuLayout = styled.div<{
  isActive: boolean
}>`
  position: absolute;
  //left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--default-menu-bg-color);
  width: 100vw;
  max-width: 600px;
  height: 100%;
  //overflow-y: auto;
  transition: 0.5s;
  left: ${({ isActive }) => isActive ? "0" : "100%"};
  pointer-events: ${({ isActive }) => isActive ? "initial" : "none"};


`
