import styled from "styled-components"
import { QuickMathBestsMenu } from "@widgets/QuickMathBestsMenu/ui/QuickMathBestsMenu"

const QuickMathBestsPage = () => {
  return <MathBestsLayout>
    <QuickMathBestsMenu />
  </MathBestsLayout>
}
export default QuickMathBestsPage
const MathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
