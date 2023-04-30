import { Game } from "@entities/Game"
import styled from "styled-components"
import HardMathIcon from "@shared/assets/DarkTheme/hardMathIcon.svg"
import QuickMathIcon from "@shared/assets/DarkTheme/quickMathIcon.svg"
import InputMathIcon from "@shared/assets/DarkTheme/inputMathIcon.svg"
import TrueFalseIcon from "@shared/assets/DarkTheme/trueFasleIcon.svg"
import BalanceIcon from "@shared/assets/DarkTheme/balanceIcon.svg"

export const GameMenu = () => {
  return <GameMenuLayout>
    <Game name={"Quick\n Math"} record={0} href={"quick-math"} icon={QuickMathIcon} />
    <Game name={"Hard\n Math"} record={0} href={"hard-math"} icon={HardMathIcon} />
    <Game name={"Input\n Math"} record={0} href={"input-math"} icon={InputMathIcon} />
    <Game name={"True\n False"} record={0} href={"true-false-math"} icon={TrueFalseIcon} />
    <Game name={"Balance"} record={0} href={"balance-math"} icon={BalanceIcon} />
  </GameMenuLayout>
}
const GameMenuLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 7px;
  gap: 7px;
`
