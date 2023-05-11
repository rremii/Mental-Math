import styled from "styled-components"
import React, { FC } from "react"
import { resultType } from "@widgets/QuickMathMenu"

interface props {
  children: React.ReactNode
  result: resultType
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  isDisabled: boolean
}


export const ResultBtn: FC<props> = ({ onClick, children, result, isDisabled }) => {


  return <ButtonLayout disabled={isDisabled} onClick={onClick} result={result}>
    {children}
  </ButtonLayout>
}
const ButtonLayout = styled.button<{
  result: resultType
}>`
  //background: linear-gradient(255.8deg, rgb(173, 17, 30) 0%, rgba(180, 19, 19, 0.3) 100%);
  background: ${({ result }) => result === "success" ? "linear-gradient(255.8deg, rgb(17, 173, 33) 0%, rgba(32, 180, 19, 0.3) 100%)" :
          result === "fail" ? "linear-gradient(255.8deg, rgb(173, 17, 30) 0%, rgba(180, 19, 19, 0.3) 100%)" :
                  "linear-gradient(255.8deg, rgb(115, 17, 173) 0%, rgba(119, 19, 180, 0.3) 100%)"};
  border-radius: 5px;
  height: 85px;
  width: 100%;
  transition: 0.5s;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 94% */

  letter-spacing: 0.2em;

  color: #FFFFFF;


`
