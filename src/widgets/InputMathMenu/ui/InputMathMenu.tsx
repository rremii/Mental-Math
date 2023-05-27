import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { PreStartTimer } from "@shared/ui/PreStartTimer"
import { InputStageTime, PreStartGap, PreStartTime, useIsPreStart, useReplaceQuestionMark } from "@entities/Game"
import { useEffect, useState } from "react"
import ArrowIcon from "@shared/assets/DarkTheme/arrowIcon.svg"
import { useInputEquation } from "@entities/Game/"

export const InputMathMenu = () => {
  const stage = useTypedSelector(state => state.Stage.stage)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const equation = useTypedSelector(state => state.Input.inputEquation)
  const inputCorrect = useTypedSelector(state => state.Input.inputCorrectAnswer)


  const [curAnswer, setCurAnswer] = useState<string>("")
  const { transformedEquation } = useReplaceQuestionMark(equation, curAnswer)


  useIsPreStart()
  const { stageTime, HandleFail, HandleSuccess } = useInputEquation(InputStageTime)


  useEffect(() => {
    setCurAnswer("")
  }, [equation])

  useEffect(() => {
    if (("" + inputCorrect).length !== curAnswer.length) return
    if (inputCorrect === +curAnswer) HandleSuccess()
    else HandleFail(+curAnswer)
  }, [curAnswer])


  const SetAnswer = (btnNumber: number | string) => {
    setCurAnswer((answer) => answer + btnNumber)
  }

  const DeleteLastNumber = () => {
    setCurAnswer((answer) => answer?.slice(0, -1))
  }


  return <MathLayout>
    <GameHeader time={stageTime} currentScore={stage} />
    <ProgressBar progress={stageTime / InputStageTime} />
    {stageState !== "preStart" ? <EquationSection equation={transformedEquation} />
      : <>
        <h3 className="preTitle">Choose the right answer</h3>
        <PreStartTimer initTime={PreStartTime} timeGap={PreStartGap} /></>}
    <ButtonsSection>
      <ResultBtn onClick={() => SetAnswer(1)}>1</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(2)}>2</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(3)}>3</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(4)}>4</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(5)}>5</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(6)}>6</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(7)}>7</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(8)}>8</ResultBtn>
      <ResultBtn onClick={() => SetAnswer(9)}>9</ResultBtn>
      <div className="option-btn">
        {curAnswer.length > 0 ? <ResultBtn onClick={DeleteLastNumber}><img src={ArrowIcon} alt="delete" /></ResultBtn> :
          <ResultBtn onClick={() => SetAnswer("-")}>-</ResultBtn>}
      </div>
      <ResultBtn onClick={() => SetAnswer(0)}>0</ResultBtn>
    </ButtonsSection>
  </MathLayout>
}
const MathLayout = styled.div`
  background: var(--game-menu-bg);
  width: 100%;
  height: 100%;
  color: var(--main-text-color);
  display: flex;
  flex-direction: column;
  padding: 0 20px 25px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    width: 100vw;
  }
  @media screen and (max-width: 500px) {
    padding: 0 10px 70px;
  }

  .preStartTimer {
    flex: 1 1 auto;
    width: 100%;
  }

  .preTitle {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 94% */
    width: 100%;
    display: flex;

    text-align: center;
    align-items: center;
    justify-content: center;

    letter-spacing: 0.2em;
    margin-top: 50px;
    color: var(--main-text-color);
  }

  .ButtonsSection {
    //height: 300px;
    //flex: 0 0 180px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-content: center;
    max-width: 300px;
    //column-gap: 0;
    //gap: 5px;
    width: 100%;
  }

  .ResultBtn {
    height: 50px;
    font-size: 21px;
    max-width: 100px;
    min-width: 50px;
    @media screen and (max-width: 400px) {
      height: 45px;
    }
  }

  .option-btn {
    height: 50px;
    font-size: 21px;
    max-width: 100px;
    width: 100%;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 400px) {
      height: 45px;
    }

    img {
      width: 20px;
    }
  }
`
