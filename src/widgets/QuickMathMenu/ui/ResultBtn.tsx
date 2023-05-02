import styled from "styled-components"
import React, { FC } from "react"

interface props {
  children: React.ReactNode
}

export const ResultBtn: FC<props> = ({ children }) => {
  return <ButtonLayout>
    {children}
  </ButtonLayout>
}
const ButtonLayout = styled.button`
  background: #7713B4;
  border-radius: 5px;
  height: 85px;
  width: 100%;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 94% */

  letter-spacing: 0.2em;

  color: #FFFFFF;


`
