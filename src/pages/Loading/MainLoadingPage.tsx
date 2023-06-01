import styled from "styled-components"
import Logo from "@shared/assets/logo.png"

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
  padding-bottom: 25px;
  @media screen and (max-width: 600px) {
    padding-bottom: 70px;
  }

  img {
    width: 50%;
    max-width: 300px;
  }
`
