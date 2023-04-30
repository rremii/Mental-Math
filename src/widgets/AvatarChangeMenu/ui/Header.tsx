import styled from "styled-components"
import Arrow from "@shared/assets/DarkTheme/arrowIcon.svg"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { HeaderWrapper } from "@shared/ui/HeaderWrapper"
import { setAvatarMenuOpen } from "@entities/Avatar"

export const Header = () => {
  const dispatch = useAppDispatch()

  const OnArrowClick = () => {
    dispatch(setAvatarMenuOpen(false))
  }

  return <HeaderLayout>
    <div className="img-box">
      <img onClick={OnArrowClick} src={Arrow} alt="arrow" />
    </div>

    <h2 className="title">Profile Picture</h2>

  </HeaderLayout>
}
const HeaderLayout = styled(HeaderWrapper)`
  height: 72px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 27px;
  background: var(--header-color);
  box-shadow: 0px 7px 50px var(--header-shadow-color);

  .img-box {
    cursor: pointer;
    transition: .4s;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--hover2-color);
    }

    img {
      width: 35px;
    }
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
    color: var(--main-text-color);
    text-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  }
`
