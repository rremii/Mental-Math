import styled from "styled-components"
import { QuickMathBestsMenu } from "@widgets/QuickMathBestsMenu/ui/QuickMathBestsMenu"

const QuickMathBestsPage = () => {
  return <QuickMathBestsLayout>
    <QuickMathBestsMenu />
  </QuickMathBestsLayout>
}
export default QuickMathBestsPage
const QuickMathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
