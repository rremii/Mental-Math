import styled from "styled-components"
import { HardMathMenu, HardMathResultMenu } from "@widgets/HardMathMenu"
import { InputMathMenu, InputMathResultMenu } from "@widgets/InputMathMenu"

const InputMathPage = () => {
  return <HardMathLayout>
    <InputMathResultMenu />
    <InputMathMenu/>
  </HardMathLayout>
}
export default InputMathPage
const HardMathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  //display: flex;
  //flex-direction: column;
  height: 100vh;
`
