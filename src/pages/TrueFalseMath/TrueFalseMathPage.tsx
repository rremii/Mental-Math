import styled from "styled-components"
import { TrueFalseMathMenu, TrueFalseMathResultMenu } from "@widgets/TrueFalseMathMenu"

const TrueFalseMathPage = () => {
  return <MathLayout>
    <TrueFalseMathResultMenu />
    <TrueFalseMathMenu />
  </MathLayout>
}
export default TrueFalseMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
`
