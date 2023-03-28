import styled from "styled-components"
import Arrow from "@shared/assets/DarkTheme/arrowIcon.svg"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setAvatarMenuOpen } from "@widgets/AvatarChangeMenu/model/AvatarMenuSlice"

export const Header = () => {
  const dispatch = useAppDispatch()

  const OnArrowClick = () => {
    dispatch(setAvatarMenuOpen(false))
  }

  return <HeaderLayout>
    <img onClick={OnArrowClick} src={Arrow} alt="arrow" />

    <h2 className="title">Profile Picture</h2>

  </HeaderLayout>
}
const HeaderLayout = styled.div`
  height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 27px;
  background: linear-gradient(349.08deg, #1B0324 7.62%, #080013 91.55%);
  box-shadow: 0px 7px 50px #300F4A;

  img {
    cursor: pointer;
    width: 35px;
  }

  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 39px;
    color: #FFFFFF;
    text-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  }


`
