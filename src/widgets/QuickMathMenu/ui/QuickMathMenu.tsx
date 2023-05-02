import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { useEffect, useState } from "react"
import { ResultBtn } from "@shared/ui/ResultBtn"

export const QuickMathMenu = () => {


  const [time, setTime] = useState(3)
  //
  // useEffect(() => {
  //
  //
  //   const timer = setTimeout(() => {
  //     setTime((time) => time + 1)
  //   }, 1000)
  //
  //   if (time >= 9) {
  //     // setTime(0)
  //     return () => clearTimeout(timer)
  //   }
  //
  //   return () => clearTimeout(timer)
  // }, [time])


  return <QuickMathLayout>
    <GameHeader time={time} currentScore={2} />
    <ProgressBar progress={time / 10} />
    <EquationSection equation={"2-1=?"} />
    <ButtonsSection>
      <ResultBtn>0</ResultBtn>
      <ResultBtn>-1</ResultBtn>
      <ResultBtn>2</ResultBtn>
      <ResultBtn>3</ResultBtn>
    </ButtonsSection>
  </QuickMathLayout>
}
const QuickMathLayout = styled.div`
  background: linear-gradient(121.57deg, #180029 49.39%, #150024 50.22%);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;
`
