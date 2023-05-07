import styled from "styled-components"
import { QuickMathMenu } from "@widgets/QuickMathMenu"
import { GameResultMenu } from "@widgets/GameResultMenu"

const QuickMathPage = () => {
  return <QuickMathLayout>
    <GameResultMenu />
    <QuickMathMenu />
  </QuickMathLayout>
}
export default QuickMathPage
const QuickMathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
