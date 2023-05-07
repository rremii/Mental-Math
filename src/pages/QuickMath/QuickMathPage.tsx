import styled from "styled-components"
import { QuickMathMenu, QuickMathResultMenu } from "@widgets/QuickMathMenu"

const QuickMathPage = () => {
  return <QuickMathLayout>
    <QuickMathResultMenu />
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
