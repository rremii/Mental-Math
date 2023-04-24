import styled from "styled-components"
import Settings from "@shared/assets/DarkTheme/settings.svg"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setSettingsMenu } from "@widgets/SettingsMenu/model/SettingsSlice"
// import Logo from '@shared/assets/DarkTheme/l'

const Header = () => {
  return <HeaderLayout>
    <div className="logo">
      Mental Math
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
  justify-content: center;
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



`
