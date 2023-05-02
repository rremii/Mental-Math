import styled from "styled-components"
import { ResultBtn } from "@widgets/QuickMathMenu/ui/ResultBtn"

export const ButtonsSection = () => {
  return <SectionLayout>
    <ResultBtn>btn</ResultBtn>
    <ResultBtn>btn</ResultBtn>
    <ResultBtn>btn</ResultBtn>
    <ResultBtn>btn</ResultBtn>
  </SectionLayout>
}
const SectionLayout = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;

`
