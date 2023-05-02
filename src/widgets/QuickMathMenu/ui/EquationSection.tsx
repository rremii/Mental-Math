import styled from "styled-components"

export const EquationSection = () => {
  return <EquationSectionLayout>
    2+1=?
  </EquationSectionLayout>
}
const EquationSectionLayout = styled.div`

  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 30px;
  /* identical to box height, or 75% */

  letter-spacing: 0.2em;

  color: #FFFFFF;
  padding-bottom: 50px;

`
