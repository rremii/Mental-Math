import styled from "styled-components"
import { FC, memo } from "react"

interface props {
  children: React.ReactNode
}

export const ButtonsSection: FC<props> = memo(({ children }) => {

  return <SectionLayout className="ButtonsSection">
    {children}
  </SectionLayout>
})
const SectionLayout = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;

`
