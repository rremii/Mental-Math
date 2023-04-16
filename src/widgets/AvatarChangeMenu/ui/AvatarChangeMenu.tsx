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
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAvatar } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"
import { Avatars } from "@widgets/AvatarChangeMenu/model/types"

const AvatarChangeMenu = () => {
  const dispatch = useAppDispatch()

  const isAvatarMenuOpen = useTypedSelector(state => state.AvatarMenu.isAvatarMenuOpen)
  const avatar = useTypedSelector(state => state.AvatarMenu.avatar)
  const isLoggedIn = useTypedSelector(state => state.Auth.isLoggedIn)


  const ChangeAvatar = () => {

  }
  const SetAvatar = (avatar: Avatars) => {
    dispatch(setAvatar(avatar))
  }


  return <AvatarMenuLayout isActive={isAvatarMenuOpen}>
    <Header />
    <AvatarList>
      <Avatar isActive={avatar === "avatar1"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar1} avatar="avatar1" />
      <Avatar isActive={avatar === "avatar2"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar2} avatar="avatar2" />
      <Avatar isActive={avatar === "avatar3"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar3} avatar="avatar3" />
      <Avatar isActive={avatar === "avatar4"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar4} avatar="avatar4" />
      <Avatar isActive={avatar === "avatar5"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar5} avatar="avatar5" />
      <Avatar isActive={avatar === "avatar6"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar6} avatar="avatar6" />
      <Avatar isActive={avatar === "avatar7"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
              src={Avatar7} avatar="avatar7" />
      <Avatar isActive={avatar === "noAvatar"} onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar} />
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
