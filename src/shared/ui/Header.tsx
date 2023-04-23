import styled from "styled-components"
import Settings from "@shared/assets/DarkTheme/settings.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setSettingsMenu } from "@widgets/SettingsMenu/model/SettingsSlice"
import { FC } from "react"

// import Logo from '@shared/assets/DarkTheme/l'

interface props {
  center?: React.ReactNode
  right?: React.ReactNode
}

const Header: FC<props> = ({ center, right }) => {


  return <HeaderLayout>
    {/*<img alt='logo' className="logo" src={}/>*/}
    <span></span>
    <div className="center">
      {center}
    </div>
    <div className="right">
      {right}
    </div>
  </HeaderLayout>
}
export default Header
const HeaderLayout = styled.header`
  flex: 0 0 74px;
  //height: 74px;
  background: linear-gradient(349.08deg, #1B0324 7.62%, #080013 91.55%);
  box-shadow: 0px 7px 50px #300F4A;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 22px;
  position: relative;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .right {

  }

`
