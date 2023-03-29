import React from "react"
import styled from "styled-components"
import { withProviders } from "./providers"
import { Routing } from "../pages"
import "./styles/style.scss"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"

function App() {
  //TODO make avatars with hashTables and
  // disctionaries(when getting avatar from
  // the backend and choosing which to choose juts push
  // em all to the Map and get from there by name

  return <Layout>
    <Routing />
  </Layout>
}

export default withProviders(App)

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  //overflow-y: auto;

`

