import styled from "styled-components"
import { QuickMathMenu, QuickMathResultMenu } from "@widgets/QuickMathMenu"

const QuickMathPage = () => {
  return <MathLayout>
    <QuickMathResultMenu />
    <QuickMathMenu />
  </MathLayout>
}
export default QuickMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
