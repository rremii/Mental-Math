import styled from "styled-components"
import { FC } from "react"

interface props {
  title: string
}

export const RatingHeader: FC<props> = ({ title }) => {

  return <HeaderLayout>
    {title}
  </HeaderLayout>
}
const HeaderLayout = styled.header`
  flex: 0 0 min-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid var(--separator-result-menu);


  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 94% */
  padding: 15px 0;
  letter-spacing: 0.2em;

  color: var(--sub-text-color);
`
