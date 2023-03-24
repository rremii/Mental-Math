import GameMenu from "@widgets/GameMenu/ ui/GameMenu"
import Header from "@widgets/Header/ui/Header"
import styled from "styled-components"
import background from "@shared/assets/DarkTheme/background.png"
import qwe from "@shared/assets/DarkTheme/image.png"

const GameMenuPage = () => {


  return <GameMenuLayout>
    <Header />
    <GameMenu />
  </GameMenuLayout>
}
export default GameMenuPage
const GameMenuLayout = styled.div`
  background-image: url(${qwe});
  background-size: cover;
  min-height: 100%;
  max-width: 600px;
  width: 100%;
`
