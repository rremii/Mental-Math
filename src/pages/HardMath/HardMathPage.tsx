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
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`
