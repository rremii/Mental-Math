import styled from "styled-components"
import Settings from "@shared/assets/settings.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setSettingsMenu } from "@entities/Settings"

export const Header = () => {
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
    <div onClick={OpenSettings} className="settings">
      <img src={Settings} alt="settings" />
    </div>
  </HeaderLayout>
}
const HeaderLayout = styled.header<{
  isSettings: boolean
}>`
  flex: 0 0 74px;
  //height: 74px;
  background: var(--header-color);
  box-shadow: 0px 7px 50px var(--header-shadow-color);
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


    color: var(--sub-text-color);

    text-shadow: 0px 1px 7px var(--text-shadow);
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
      background: var(--hover2-color);
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

`
