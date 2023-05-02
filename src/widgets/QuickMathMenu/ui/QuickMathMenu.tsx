import styled from "styled-components"
import { ButtonsSection } from "./ButtonsSection"
import { EquationSection } from "./EquationSection"
import { Header } from "./Header"
import { ProgressBar } from "./ProgressBar"
import { useEffect, useState } from "react"

export const QuickMathMenu = () => {


  // const [time, setTime] = useState(0)
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
    <Header />
    <ProgressBar progress={0.1} />
    <EquationSection />
    <ButtonsSection />
  </QuickMathLayout>
}
const QuickMathLayout = styled.div`
  background: linear-gradient(121.57deg, #310156 49.39%, #250042 50.22%);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;
`
