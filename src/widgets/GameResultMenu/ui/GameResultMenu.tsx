import styled from "styled-components"

export const GameResultMenu = () => {

  return <GameResultLayout>
    <header className="header">
      <h1>YOUR RESULT</h1>
      <h2>2</h2>
    </header>
    <div className="result-section">
      <div className="wrong">
        <p>Wrong answer:</p> <span>8</span>
      </div>
      <div className="correct">
        <p>Wrong answer:</p> <span>8</span>
      </div>
    </div>
    <div className="btn-menu">
      <button className="menu">Menu</button>
      <button className="restart">Restart</button>
    </div>
  </GameResultLayout>
}
const GameResultLayout = styled.div`
  position: fixed;
  z-index: 3;
  background: linear-gradient(121.57deg, #1f0031 49.39%, #150024 50.22%);
  width: 100vw;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;

  color: white;
  padding: 10px 16px 25px;

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

      color: #EED9F8;
    }

    border-bottom: 1px solid rgba(84, 51, 125, 1);

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

        color: #FF6565;
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

        color: #96FD94;
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

      color: #A954FD;
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

      background: #7713B4;
      border-radius: 20px;
    }
  }
`
