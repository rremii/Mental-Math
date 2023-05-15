import styled from "styled-components"
import React, { FC } from "react"
import ratingIcon from "@shared/assets/DarkTheme/rating.svg"
import { NavLink, useNavigate } from "react-router-dom"

interface IProps {
  icon: string
  name: string
  href: string
  record?: number
}


export const GoToGame: FC<IProps> = ({ name, icon, href, record }) => {
  const navigate = useNavigate()


  const RedirectTo = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/leaderboard/" + href)
  }

  return <GameLayout to={href}>
    <div className="top">
      <div className="icon-box">
        <img src={icon} alt={name} />
      </div>
      <div className="name-box">
        <span>{name}</span>
      </div>
      <div onClick={RedirectTo} className="rating-box">
        <img src={ratingIcon} alt="rating icon" />
      </div>
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
  pointer-events: auto;

  .top {
    display: flex;
    align-items: center;
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
      flex: 1 0 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      margin-bottom: 5px;

      img {
        transform: translateY(-5px);
        width: 45px !important;
        height: 45px !important;
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
