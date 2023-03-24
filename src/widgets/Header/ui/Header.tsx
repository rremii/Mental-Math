import styled from "styled-components"
import Settings from "@shared/assets/DarkTheme/settings.svg"
// import Logo from '@shared/assets/DarkTheme/l'

const Header = () => {

  return <HeaderLayout>
    {/*<img alt='logo' className="logo" src={}/>*/}
    <span></span>
    <div className="logo">
      Quick Brains
    </div>
    <div className="settings">
      <img src={Settings} alt="settings" />
    </div>
  </HeaderLayout>
}
export default Header
const HeaderLayout = styled.header`
  height: 74px;
  background-color: var(--dark-main-color);

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
    -webkit-text-stroke: 1px #4D4363;
    color: white;
  }

  .settings {

  }

`
