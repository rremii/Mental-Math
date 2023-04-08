import React from "react"
import styled from "styled-components"
import { withProviders } from "./providers"
import { Routing } from "../pages"
import "./styles/style.scss"
import AvatarChangeMenu from "@widgets/AvatarChangeMenu/ui/AvatarChangeMenu"
import { Toast } from "@shared/ui/Toast"
import Layout from "./layout/Layout"


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



