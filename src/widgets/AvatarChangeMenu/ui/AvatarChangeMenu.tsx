import styled from "styled-components"
import { AvatarList } from "./AvatarList"
import { Header } from "./Header"

const AvatarChangeMenu = () => {
  return <AvatarMenuLayout>
    <Header />
    <AvatarList>
      asd
    </AvatarList>
  </AvatarMenuLayout>
}
export default AvatarChangeMenu
const AvatarMenuLayout = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #100022;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`
