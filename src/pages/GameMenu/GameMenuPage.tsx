import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import Header from "@widgets/Header/ui/Header"
import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"

const GameMenuPage = () => {


  return <GameMenuLayout>
    <Header />
    <GameMenu />
  </GameMenuLayout>
}
export default GameMenuPage
const GameMenuLayout = styled.div`
  min-height: 100vh;
  height: min-content;
  max-width: 600px;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  flex-direction: column;
`
