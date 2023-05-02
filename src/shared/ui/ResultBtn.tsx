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
  background: linear-gradient(255.8deg, rgb(84, 13, 127) 0%, rgba(119, 19, 180, 0.3) 100%);
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
