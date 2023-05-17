import styled from "styled-components"
import { HardMathMenu, HardMathResultMenu } from "@widgets/HardMathMenu"

const HardMathPage = () => {
  return <HardMathLayout>
    <HardMathResultMenu />
    <HardMathMenu />
  </HardMathLayout>
}
export default HardMathPage
const HardMathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
