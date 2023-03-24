import styled from "styled-components"
import { FC } from "react"
import ratingIcon from "@shared/assets/DarkTheme/rating.svg"
import { NavLink } from "react-router-dom"

interface IProps {
  icon: string
  name: string
  href: string
  record: number
}


export const Game: FC<IProps> = ({ name, icon, href, record }) => {
  return <GameLayout>
    <div className="top">
      <div className="icon-box">
        <img src={icon} alt={name} />
      </div>
      <div className="name-box">
        <span>{name}</span>
      </div>
      <NavLink to={href} className="rating-box">
        <img src={ratingIcon} alt="rating icon" />
      </NavLink>
    </div>
    <div className="bottom">
      <span>Best {record}</span>
    </div>
  </GameLayout>
}
const GameLayout = styled.div`
  width: 100%;
  max-width: 320px;
  height: 105px;
  background: linear-gradient(268.07deg, #070011 12.96%, var(--main-color) 97.1%);
  display: grid;
  grid-template-rows: 2.3fr 1fr;
  padding: 10px 0 7px 12px;

  .top {
    display: flex;
    align-content: baseline;
    //justify-content: space-between;
    //width: 100%;
    border-bottom: rgba(155, 139, 188, 0.2) 2px solid;
    padding-right: 12px;

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 70px;

      img {
        max-width: 70px;
      }
    }

    .name-box {
      width: 100%;
      //height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;

      span {
        transform: translateX(-100%);
        font-family: 'Inter', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;
        word-wrap: break-word;
        color: rgba(255, 255, 255, 0.8);
        max-width: 50px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .rating-box {
      width: 45px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
      }
    }
  }

  .bottom {
    //padding-bottom: 7px;
    padding-left: 5px;
    display: flex;
    align-content: center;
    height: min-content;
    width: 100%;

    span {
      //padding: 7px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: #c1c0c0;
    }
  }



`
