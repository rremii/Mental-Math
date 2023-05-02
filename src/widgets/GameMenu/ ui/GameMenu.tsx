import { GoToGame } from "@features/GoToGame"
import styled from "styled-components"
import HardMathIcon from "@shared/assets/DarkTheme/hardMathIcon.svg"
import QuickMathIcon from "@shared/assets/DarkTheme/quickMathIcon.svg"
import InputMathIcon from "@shared/assets/DarkTheme/inputMathIcon.svg"
import TrueFalseIcon from "@shared/assets/DarkTheme/trueFasleIcon.svg"
import BalanceIcon from "@shared/assets/DarkTheme/balanceIcon.svg"


const Games = [
  { name: "Quick\n Math", href: "quick-math", icon: QuickMathIcon },
  { name: "Hard\n Math", href: "hard-math", icon: HardMathIcon },
  { name: "Input\n Math", href: "input-math", icon: InputMathIcon },
  { name: "True\n False", href: "true-false-math", icon: TrueFalseIcon },
  { name: "Balance", href: "balance-math", icon: BalanceIcon }
]

export const GameMenu = () => {


  return <GameMenuLayout>

    {Games.map(({ name, icon, href }) => {
      return <GoToGame name={name} record={0} href={href} icon={icon} />
    })}

  </GameMenuLayout>
}
const GameMenuLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 7px;
  gap: 7px;
`
