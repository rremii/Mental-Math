import styled from "styled-components"
import { AvatarList } from "./AvatarList"
import { Header } from "./Header"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { Avatar } from "@shared/ui/Avatar"
import { useChangeAvatarMutation, useGetUserQuery } from "@entities/User"
import { Avatars } from "@entities/Avatar/model/types"
import { AvatarsData, setAvatar } from "@entities/Avatar"

export const AvatarChangeMenu = () => {
  const dispatch = useAppDispatch()

  const isAvatarMenuOpen = useTypedSelector(state => state.AvatarMenu.isAvatarMenuOpen)
  let avatar = useTypedSelector(state => state.AvatarMenu.avatar)
  const isLoggedIn = useTypedSelector(state => state.Auth.isLoggedIn)

  const { data: user } = useGetUserQuery(undefined, {
    skip: isLoggedIn !== "success"
  })


  const [changeAvatar] = useChangeAvatarMutation()

  const ChangeAvatar = (avatar: string) => {
    if (!avatar || !user) return
    changeAvatar({ id: user.id, newAvatar: avatar })
  }
  const SetAvatar = (avatar: Avatars) => {
    dispatch(setAvatar(avatar))
  }

  avatar = user?.avatar || avatar
  return <AvatarMenuLayout isActive={isAvatarMenuOpen}>
    <Header />
    <AvatarList>
      {AvatarsData.map((avatarData, index) => {
        return <Avatar key={index} isActive={avatar === avatarData}
                       onClick={isLoggedIn === "success" ? ChangeAvatar : SetAvatar}
                       avatar={avatarData} />
      })}
    </AvatarList>
  </AvatarMenuLayout>
}
const AvatarMenuLayout = styled.div<{
  isActive: boolean
}>`
  position: absolute;
  z-index: 2;
  background-color: var(--default-menu-bg-color);
  width: 100vw;
  max-width: 600px;
  //height: 100vh;
  height: 100%;
  overflow-y: auto;
  transition: 0.5s;
  left: ${({ isActive }) => isActive ? "0" : "100%"};
  pointer-events: ${({ isActive }) => isActive ? "initial" : "none"};


`
