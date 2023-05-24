import styled from "styled-components"
import { FC } from "react"

interface props {
  equation?: string
}

export const EquationSection: FC<props> = ({ equation }) => {


  return <EquationSectionLayout>
    <div className="equation-box">
      {equation}
    </div>
  </EquationSectionLayout>
}
const EquationSectionLayout = styled.pre`

  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;


  padding-bottom: 50px;

  .equation-box {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 80px;

    /* identical to box height, or 75% */
    min-height: 55px;
    letter-spacing: 0em;
    display: flex;
    align-items: center;
    justify-items: center;
    color: #FFFFFF;
  }
`
