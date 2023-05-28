import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const MenuBtn = () => {

  return <BtnLayout to="/">
    Menu
  </BtnLayout>
}
const BtnLayout = styled(NavLink)`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 188% */
  color: var(--sub-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 7px 0;
  letter-spacing: 0.2em;
  background-color: var(--restart-game-btn);
  border-radius: 20px;
  max-width: 310px;
`
