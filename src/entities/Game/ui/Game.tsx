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
  height: 115px;
  background: linear-gradient(268.07deg, #070011 12.96%, #9C80AD 97.1%);
  display: grid;
  grid-template-rows: 2.3fr 1fr;

  .top {
    padding: 20px 10px 0;
    display: flex;
    align-content: baseline;
    //justify-content: space-between;
    //width: 100%;
    border-bottom: rgba(155, 139, 188, 0.1) 2px solid;

    .icon-box {
      display: flex;
      align-items: center;

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
        font-family: 'Inter', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        display: flex;
        align-items: center;
        letter-spacing: 0.2em;

        color: #DACEF3;

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
    display: flex;
    align-content: center;
    height: min-content;
    width: 100%;

    span {
      padding: 5px;
    }
  }



`
