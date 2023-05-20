import { GoToGame } from "@features/GoToGame"
import styled from "styled-components"
import HardMathIcon from "@shared/assets/DarkTheme/hardMathIcon.svg"
import QuickMathIcon from "@shared/assets/DarkTheme/quickMathIcon.svg"
import InputMathIcon from "@shared/assets/DarkTheme/inputMathIcon.svg"
import TrueFalseIcon from "@shared/assets/DarkTheme/trueFasleIcon.svg"
import BalanceIcon from "@shared/assets/DarkTheme/balanceIcon.svg"
import { useGetGameResultsQuery, useGetUserQuery } from "@entities/User"
import { useMemo } from "react"


export const GameMenu = () => {

  const { data: user } = useGetUserQuery()

  const { data: gameResults } = useGetGameResultsQuery({ id: user?.id }, {
    skip: !user
  })


  const Games = useMemo(() => [
    { name: "Quick\n Math", href: "quick-math", icon: QuickMathIcon, score: gameResults?.quickMathScore },
    { name: "Hard\n Math", href: "hard-math", icon: HardMathIcon, score: gameResults?.hardMathScore },
    { name: "Input\n Math", href: "input-math", icon: InputMathIcon, score: 0 },
    { name: "True\n False", href: "true-false-math", icon: TrueFalseIcon, score: 0 },
    { name: "Balance", href: "balance-math", icon: BalanceIcon, score: 0 }
  ], [gameResults])

  return <GameMenuLayout>


    {Games.map(({ name, icon, href, score }) => {
      return <GoToGame key={name} name={name} record={score} href={href}
                       icon={icon} />
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
