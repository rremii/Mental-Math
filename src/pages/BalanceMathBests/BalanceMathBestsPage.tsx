import styled from "styled-components"
import { TrueFalseMathBestsMenu } from "@widgets/TrueFalseMathBestsMenu"
import { BalanceMathResultMenu } from "@widgets/BalanceMathMenu"
import { BalanceMathBestsMenu } from "@widgets/BalanceMathBestsMenu"

const BalanceMathBestsPage = () => {
  return <MathBestsLayout>
    <BalanceMathBestsMenu />
  </MathBestsLayout>
}
export default BalanceMathBestsPage
const MathBestsLayout = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;

`
