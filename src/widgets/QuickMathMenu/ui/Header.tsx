import styled from "styled-components"
import ClockIcon from "@shared/assets/DarkTheme/clock-icon.svg"
import CupIcon from "@shared/assets/DarkTheme/cup-icon.svg"

export const Header = () => {
  return <HeaderLayout>
    <div className="section">
      <img src={ClockIcon} alt="clock-icon" />
      <span>1</span>
    </div>
    <div className="section">
      <img src={CupIcon} alt="cup-icon" />
      <span>5</span>
    </div>
  </HeaderLayout>
}
const HeaderLayout = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .section {
    display: flex;
    align-items: center;
    gap: 9px;

    img {
      width: 30px;
    }

    span {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.2em;
      color: #FFFFFF;
    }
  }



`
