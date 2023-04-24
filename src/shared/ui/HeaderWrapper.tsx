import styled from "styled-components"
import Settings from "@shared/assets/DarkTheme/settings.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setSettingsMenu } from "@widgets/SettingsMenu/model/SettingsSlice"
import { FC } from "react"

// import Logo from '@shared/assets/DarkTheme/l'

interface props {
  children?: React.ReactNode
}

// const HeaderWrapper: FC<props> = ({ children }) => {
//
//
//   return <HeaderWrapperLayout>
//     {children}
//   </HeaderWrapperLayout>
// }
// export default HeaderWrapper
export const HeaderWrapper = styled.header`
  flex: 0 0 74px;
  background: linear-gradient(349.08deg, #1B0324 7.62%, #080013 91.55%);
  box-shadow: 0px 7px 50px #300F4A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;
  position: relative;



`
