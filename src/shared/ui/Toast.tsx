import styled from "styled-components"
import React from "react"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { TypeWriter } from "@shared/ui/TypeWriter"

export const Toast: React.FC = () => {

  const isShown = useTypedSelector(state => state.Toast.isShown)
  const message = useTypedSelector(state => state.Toast.message)

  return (
    <Layout isShown={isShown}>
      {isShown ?
        <TypeWriter content={message} speed={75}
                    delay={1000} /> :
        <pre>{message}</pre>}
    </Layout>
  )
}
const Layout = styled.div<{
  isShown: boolean
}>`
  position: fixed;
  top: 100%;
  left: 50%;
  transform: ${({ isShown }) => isShown ? "translateY(-110%)" : ""} translateX(-50%);
  background-color: red;
  z-index: 500;
  transition: .5s;
  border-radius: 6px;
  padding: 16px;
  width: max-content;

  pre {
    font-family: "HP Simplified Jpan";
    font-size: 18px;
    font-weight: bold;
    color: white;
    word-wrap: break-word;
    max-width: 300px;
  }

  h2 {
    font-size: 16px;
    color: white;
  }


`
