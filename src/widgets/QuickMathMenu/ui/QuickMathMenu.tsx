import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { useEffect, useState } from "react"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useGetEquation } from "@entities/QuickMath"

export const QuickMathMenu = () => {


  const [time, setTime] = useState(3)
  const [stage, setStage] = useState(2)

  const { equation, updateEquation } = useGetEquation()


  useEffect(() => {
    updateEquation()
  }, [stage])

  return <QuickMathLayout>
    <GameHeader time={time} currentScore={stage} />
    <ProgressBar progress={time / 10} />
    <EquationSection equation={equation} />
    <ButtonsSection>
      <ResultBtn result="success">0</ResultBtn>
      <ResultBtn>2</ResultBtn>
      <ResultBtn>3</ResultBtn>
      <ResultBtn result="fail">-1</ResultBtn>
    </ButtonsSection>
  </QuickMathLayout>
}
const QuickMathLayout = styled.div`
  background: linear-gradient(121.57deg, #1f0031 49.39%, #150024 50.22%);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;
`
