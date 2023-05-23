import styled from "styled-components"
import { HardMathMenu, HardMathResultMenu } from "@widgets/HardMathMenu"

const HardMathPage = () => {
  return <MathLayout>
    <HardMathResultMenu />
    <HardMathMenu />
  </MathLayout>
}
export default HardMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
