import { Avatar } from "@features/Avatar"
import styled from "styled-components"
import { AvatarList } from "./AvatarList"
import { Header } from "./Header"
import Avatar1 from "@shared/assets/DarkTheme/avatars/avatarIcon1.png"
import Avatar2 from "@shared/assets/DarkTheme/avatars/avatarIcon2.png"
import Avatar3 from "@shared/assets/DarkTheme/avatars/avatarIcon3.png"
import Avatar4 from "@shared/assets/DarkTheme/avatars/avatarIcon4.png"
import Avatar5 from "@shared/assets/DarkTheme/avatars/avatarIcon5.png"
import Avatar6 from "@shared/assets/DarkTheme/avatars/avatarIcon6.png"
import Avatar7 from "@shared/assets/DarkTheme/avatars/avatarIcon7.png"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

const AvatarChangeMenu = () => {

  const isAvatarMenuOpen = useTypedSelector(state => state.AvatarMenu.isAvatarMenuOpen)

  return <AvatarMenuLayout isActive={isAvatarMenuOpen}>
    <Header />
    <AvatarList>
      <Avatar src={Avatar1} />
      <Avatar src={Avatar2} />
      <Avatar src={Avatar3} />
      <Avatar src={Avatar4} />
      <Avatar src={Avatar5} />
      <Avatar src={Avatar6} />
      <Avatar src={Avatar7} />
      <Avatar />
    </AvatarList>
  </AvatarMenuLayout>
}
export default AvatarChangeMenu
const AvatarMenuLayout = styled.div<{
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
