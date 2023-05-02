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


export const GoToGame: FC<IProps> = ({ name, icon, href, record }) => {
  return <GameLayout to={href}>
    <div className="top">
      <div className="icon-box">
        <img src={icon} alt={name} />
      </div>
      <div className="name-box">
        <span>{name}</span>
      </div>
      <NavLink to={"leaderboard/" + href} className="rating-box">
        <img src={ratingIcon} alt="rating icon" />
      </NavLink>
    </div>
    <div className="bottom">
      <span>Best {record}</span>
    </div>
  </GameLayout>
}
const GameLayout = styled(NavLink)`
  width: 100%;
  max-width: 360px;
  height: 105px;
  background: var(--game-cell-bg-color);
  display: grid;
  grid-template-rows: 2.3fr 1fr;
  row-gap: 5px;
  padding: 10px 0 0px 12px;

  .top {
    display: flex;
    align-content: baseline;
    //justify-content: space-between;
    //width: 100%;
    border-bottom: var(--separator-color) 2px solid;
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
        color: var(--sub-text-color);
        max-width: 50px;
        text-shadow: 0px 4px 4px var(--text-shadow-dark);
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
    width: 100%;
    height: 100%;

    span {
      //padding: 7px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: var(--sub-text-color);
    }
  }



`
