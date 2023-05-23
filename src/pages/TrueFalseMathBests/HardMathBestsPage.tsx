import styled from "styled-components"
import { HardMathBestsMenu } from "@widgets/HardMathBestsMenu"

const HardMathBestsPage = () => {
  return <HardMathBestsLayout>
    <HardMathBestsMenu />
  </HardMathBestsLayout>
}
export default HardMathBestsPage
const HardMathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
