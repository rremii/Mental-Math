import styled from "styled-components"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { FC } from "react"

interface props {
  children: React.ReactNode
}

export const ButtonsSection: FC<props> = ({ children }) => {

  return <SectionLayout>
    {children}
  </SectionLayout>
}
const SectionLayout = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;

`
