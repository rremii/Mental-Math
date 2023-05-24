import styled from "styled-components"
import { HardMathMenu, HardMathResultMenu } from "@widgets/HardMathMenu"
import { TrueFalseMathMenu, TrueFalseMathResultMenu } from "@widgets/TrueFalseMathMenu"
import { BalanceMathMenu, BalanceMathResultMenu } from "@widgets/BalanceMathMenu"

const BalanceMathPage = () => {
  return <MathLayout>
    <BalanceMathResultMenu />
    <BalanceMathMenu />
  </MathLayout>
}
export default BalanceMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
