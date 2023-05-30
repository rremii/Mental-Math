import styled from "styled-components"
import Logo from "@shared/assets/DarkTheme/clock-icon.svg"

const LoadingPage = () => {
  return <Loading>
    <img src={Logo} alt="logo" />
  </Loading>
}
export default LoadingPage
const Loading = styled.div`
  background: var(--game-menu-bg);
  max-width: 600px;
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    max-width: 100px;
  }
`
