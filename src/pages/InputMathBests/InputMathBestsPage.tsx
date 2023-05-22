import styled from "styled-components"
import { HardMathBestsMenu } from "@widgets/HardMathBestsMenu"
import { InputMathBestsMenu } from "@widgets/InputMathBestsMenu"

const InputMathBestsPage = () => {
  return <InputMathBestsLayout>
    <InputMathBestsMenu />
  </InputMathBestsLayout>
}
export default InputMathBestsPage
const InputMathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
