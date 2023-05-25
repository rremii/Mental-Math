import styled from "styled-components"
import { InputMathMenu, InputMathResultMenu } from "@widgets/InputMathMenu"

const InputMathPage = () => {
  return <MathLayout>
    <InputMathResultMenu />
    <InputMathMenu/>
  </MathLayout>
}
export default InputMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
