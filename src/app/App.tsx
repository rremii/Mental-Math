import React from "react"
import styled from "styled-components"
import { withProviders } from "./providers"
import { Routing } from "../pages"
import "./styles/style.scss"

function App() {

  return <Layout>

    <Routing />


  </Layout>

}

export default withProviders(App)

const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  
`

