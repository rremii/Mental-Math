import styled from "styled-components"
import { HardMathBestsMenu } from "@widgets/HardMathBestsMenu"
import { TrueFalseMathBestsMenu } from "@widgets/TrueFalseMathBestsMenu"

const TrueFalseMathBestsPage = () => {
  return <MathBestsLayout>
    <TrueFalseMathBestsMenu />
  </MathBestsLayout>
}
export default TrueFalseMathBestsPage
const MathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
