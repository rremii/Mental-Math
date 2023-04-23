import styled from "styled-components"
import Settings from "@shared/assets/DarkTheme/settings.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setSettingsMenu } from "@widgets/SettingsMenu/model/SettingsSlice"
// import Logo from '@shared/assets/DarkTheme/l'

const Header = () => {
  const dispatch = useAppDispatch()

  const isSettingsOpen = useTypedSelector(state => state.SettingsMenu.isSettingsMenuOpen)

  const OpenSettings = () => {
    dispatch(setSettingsMenu(true))
  }


  return <HeaderLayout isSettings={isSettingsOpen}>
    {/*<img alt='logo' className="logo" src={}/>*/}
    <span></span>
    <div className="logo">
      Mental Math
    </div>
    {/*<div onClick={OpenSettings} className="settings">*/}
    {/*  <img src={Settings} alt="settings" />*/}
    {/*</div>*/}
  </HeaderLayout>
}
export default Header
const HeaderLayout = styled.header<{
  isSettings: boolean
}>`
  flex: 0 0 74px;
  //height: 74px;
  background: linear-gradient(349.08deg, #1B0324 7.62%, #080013 91.55%);
  box-shadow: 0px 7px 50px #300F4A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 22px;

  .logo {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;


    color: #FFFFFF;

    text-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  }

  .settings {
    cursor: pointer;
    transition: 1s;
    transform: ${({ isSettings }) => isSettings ? "rotate(180deg)" : "rotate(0)"};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      background: linear-gradient(349.08deg, rgba(92, 7, 123, 0.22) 7.62%, rgba(60, 2, 139, 0.14) 91.55%);
    }
  }

`
