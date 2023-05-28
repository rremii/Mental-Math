import styled from "styled-components"
import { Avatars } from "@entities/Avatar/model/types"
import { FC } from "react"

export type placeType = "first" | "second" | "third"

interface props {
  avatar: Avatars
  userName: string
  score: number | string
  ratingSrc?: string
}

export const RatingCell: FC<props> = ({ ratingSrc, score, userName, avatar }) => {


  return <CellLayout>
    <div className="avatar">
      <img src={avatar} alt="avatar" />
    </div>
    <div className="info">
      <h2>{userName}</h2>
      <p>Score: {score}</p>
    </div>
    {ratingSrc && <div className="top">
      <img src={ratingSrc} alt="rating" />
    </div>}

  </CellLayout>
}
const CellLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 21px;

  .avatar {
    width: 75px;
    height: 75px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    h2 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      //line-height: 30px;
      /* identical to box height, or 188% */

      letter-spacing: 0.2em;
      color: var(--main-text-color);

    }

    p {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      //line-height: 30px;
      /* or 250% */

      letter-spacing: 0.05em;

      color: var(--main-text-color);
    }
  }

  .top {
    width: 45px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
    }
  }

`
