import styled from "styled-components"
import { FC } from "react"
import { useNavigate } from "react-router-dom"

interface props {
  result: number
  wrongAnswer: number | null
  correctAnswer: number | null
  isHidden: boolean
  OnRestart: () => void
  OnMenu: () => void
}

export const ResultMenu: FC<props> = ({ wrongAnswer, result, isHidden, OnRestart, correctAnswer, OnMenu }) => {
  const navigate = useNavigate()

  const OnMenuClick = () => {
    navigate("/")
    OnMenu()
  }
  return <ResultLayout isHidden={isHidden}>
    <header className="header">
      <h1>YOUR RESULT</h1>
      <h2>{result}</h2>
    </header>
    <div className="result-section">
      <div className="wrong">
        <p>Wrong answer:</p> <span>{wrongAnswer || ""}</span>
      </div>
      <div className="correct">
        <p>Correct answer:</p> <span>{correctAnswer}</span>
      </div>
    </div>
    <div className="btn-menu">
      <button onClick={OnMenuClick} className="menu">Menu</button>
      <button onClick={OnRestart} className="restart">Restart</button>
    </div>
  </ResultLayout>
}
const ResultLayout = styled.div<{
  isHidden: boolean
}>`
  position: fixed;
  z-index: 3;
  background: var(--game-menu-bg);
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  left: ${({ isHidden }) => isHidden ? "100%" : "0"};
  color: var(--main-text-color);
  padding: 10px 16px 25px;
  transition: 0.5s;
  transition-delay: ${({ isHidden }) => isHidden ? "" : "1.25s"};

  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    flex: 0 0 min-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 14px 0;

    h1, h2 {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 30px;
      /* identical to box height, or 94% */

      letter-spacing: 0.2em;

      color: var(--result-menu-header);
    }

    border-bottom: 1px solid var(--separator-result-menu);

  }

  .result-section {
    flex: 1 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    gap: 15px;

    .wrong {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p, span {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        /* identical to box height, or 125% */

        letter-spacing: 0.2em;

        color: var(--fail-answer);
      }

    }

    .correct {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      p, span {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
        /* identical to box height, or 125% */

        letter-spacing: 0.2em;

        color: var(--correct-answer);
      }
    }

  }

  .btn-menu {
    flex: 0 0 min-content;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;

    .menu {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      /* identical to box height, or 188% */

      letter-spacing: 0.2em;
      display: flex;
      align-items: center;
      justify-items: center;
      color: var(--result-menu-btn-text);
    }

    .restart {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 30px;
      /* identical to box height, or 188% */

      letter-spacing: 0.2em;

      color: #FFFFFF;

      width: 181px;
      height: 41px;

      background: var(--restart-game-btn);
      border-radius: 20px;
    }
  }
`

