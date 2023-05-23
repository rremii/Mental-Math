import styled from "styled-components"
import { HardMathBestsMenu } from "@widgets/HardMathBestsMenu"

const HardMathBestsPage = () => {
  return <MathBestsLayout>
    <HardMathBestsMenu />
  </MathBestsLayout>
}
export default HardMathBestsPage
const MathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
