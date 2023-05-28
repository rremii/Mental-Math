import styled from "styled-components"
import React, { FC } from "react"
import { resultType } from "@entities/Game"

interface props {
  children?: React.ReactNode
  result?: resultType
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  isDisabled?: boolean
}


export const ResultBtn: FC<props> = (props = {
  result: "initial", isDisabled: false, children: "", onClick: () => undefined
}) => {

  const { result, isDisabled, children, onClick } = props


  return <ButtonLayout className="ResultBtn" disabled={isDisabled} onClick={onClick} result={result || "initial"}>
    {children}
  </ButtonLayout>
}
const ButtonLayout = styled.button<{
  result: resultType
}>`
  //background: linear-gradient(255.8deg, rgb(173, 17, 30) 0%, rgba(180, 19, 19, 0.3) 100%);
  background: ${({ result }) => result === "success" ? "var(--result-btn-success)" :
          result === "fail" ? "var(--result-btn-fail)" :
                  "var(--result-btn-initial)"};
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

  color: var(--sub-text-color);

`
