import styled from "styled-components"
import { HardMathMenu, HardMathResultMenu } from "@widgets/HardMathMenu"
import { TrueFalseMathMenu, TrueFalseMathResultMenu } from "@widgets/TrueFalseMathMenu"

const TrueFalseMathPage = () => {
  return <HardMathLayout>
    <TrueFalseMathResultMenu />
    <TrueFalseMathMenu />
  </HardMathLayout>
}
export default TrueFalseMathPage
const HardMathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
