import { Avatar } from "@features/Avatar"
import styled from "styled-components"
import { SettingsBox } from "./SettingsBox"
import { Header } from "./Header"
import Avatar1 from "@shared/assets/DarkTheme/avatars/avatarIcon1.png"
import Avatar2 from "@shared/assets/DarkTheme/avatars/avatarIcon2.png"
import Avatar3 from "@shared/assets/DarkTheme/avatars/avatarIcon3.png"
import Avatar4 from "@shared/assets/DarkTheme/avatars/avatarIcon4.png"
import Avatar5 from "@shared/assets/DarkTheme/avatars/avatarIcon5.png"
import Avatar6 from "@shared/assets/DarkTheme/avatars/avatarIcon6.png"
import Avatar7 from "@shared/assets/DarkTheme/avatars/avatarIcon7.png"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAvatar } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"

const SettingsMenu = () => {
  const dispatch = useAppDispatch()

  const isSettingsMenuOpen = useTypedSelector(state => state.SettingsMenu.isSettingsMenuOpen)


  return <SettingsMenuLayout isActive={isSettingsMenuOpen}>
    <Header />
    <SettingsBox />
  </SettingsMenuLayout>
}
export default SettingsMenu
const SettingsMenuLayout = styled.div<{
  isActive: boolean
}>`
  position: fixed;
  z-index: 1;
  background-color: #100022;
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;
  transition: 0.5s;
  transform: ${({ isActive }) => isActive ? "translateX(0)" : "translateX(100%)"};
  pointer-events: ${({ isActive }) => isActive ? "initial" : "none"};


`
