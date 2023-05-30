import styled from "styled-components"
import { BalanceMathMenu, BalanceMathResultMenu } from "@widgets/BalanceMathMenu"

const BalanceMathPage = () => {
  return <MathLayout>
    <BalanceMathResultMenu />
    <BalanceMathMenu />
  </MathLayout>
}
export default BalanceMathPage
const MathLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;

`
