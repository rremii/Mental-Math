import styled from "styled-components"
import { InputMathBestsMenu } from "@widgets/InputMathBestsMenu"

const InputMathBestsPage = () => {
  return <MathBestsLayout>
    <InputMathBestsMenu />
  </MathBestsLayout>
}
export default InputMathBestsPage
const MathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
