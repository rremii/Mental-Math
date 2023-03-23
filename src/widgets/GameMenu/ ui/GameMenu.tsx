import { Game } from "@entities/Game"
import styled from "styled-components"
import HardMathIcon from "@shared/assets/DarkTheme/hardMathIcon.svg"
import QuickMathIcon from "@shared/assets/DarkTheme/quickMathIcon.svg"

const GameMenu = () => {
  return <GameMenuLayout>
    <Game name={"Quick Math"} record={0} href={"quick-math"} icon={QuickMathIcon} />
    <Game name={"Hard Math"} record={0} href={"hard-math"} icon={HardMathIcon} />
    <Game name={"Hard Math"} record={0} href={"hard-math"} icon={HardMathIcon} />
    <Game name={"Hard Math"} record={0} href={"hard-math"} icon={HardMathIcon} />
    <Game name={"Hard Math"} record={0} href={"hard-math"} icon={HardMathIcon} />
  </GameMenuLayout>
}
export default GameMenu
const GameMenuLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 10px;
  gap: 15px;
`
