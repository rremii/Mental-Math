import styled from "styled-components"

export const Header = () => {
  return <HeaderLayout>
    <div className="logo">
      Mental Math
    </div>
  </HeaderLayout>
}
const HeaderLayout = styled.header`
  flex: 0 0 74px;
  //height: 74px;
  background: var(--header-color);
  box-shadow: 0px 7px 50px var(--header-shadow-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 22px;

  .logo {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;


    color: var(--sub-text-color);

    text-shadow: 0px 1px 7px rgba(255, 255, 255, 0.25);
  }



`
