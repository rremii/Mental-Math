import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { PreStartTimer } from "@shared/ui/PreStartTimer"
import { InputStageTime, PreStartGap, PreStartTime, useIsPreStart, useReplaceQuestionMark } from "@entities/Game"
import { useCallback, useEffect, useMemo, useState } from "react"
import DeleteIcon from "@shared/assets/delete.svg"
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
    setCurAnswer((answer) => answer + btnNumber + "")
  }

  const DeleteLastNumber = () => {
    setCurAnswer((answer) => answer?.slice(0, -1))
  }


  const InputBtns = useMemo(() => [
    { answer: "1" },
    { answer: "2" },
    { answer: "3" },
    { answer: "4" },
    { answer: "5" },
    { answer: "6" },
    { answer: "7" },
    { answer: "8" },
    { answer: "9" },
    { answer: "0" }
  ], [])


  return <MathLayout>
    <GameHeader time={stageTime} currentScore={stage} />
    <ProgressBar progress={stageTime / InputStageTime} />
    {stageState !== "preStart" ? <EquationSection equation={transformedEquation} />
      : <>
        <h3 className="preTitle">Choose the right answer</h3>
        <PreStartTimer initTime={PreStartTime} timeGap={PreStartGap} /></>}
    <ButtonsSection>
      {InputBtns.map(({ answer }) => {
        const handleClick = useCallback(() => SetAnswer(answer), [])
        return <ResultBtn key={answer} onClick={handleClick}>{answer}</ResultBtn>
      })}
      <div className="option-btn">
        {curAnswer.length > 0 ?
          <ResultBtn onClick={DeleteLastNumber}><img src={DeleteIcon} alt="delete" /></ResultBtn> :
          <ResultBtn onClick={() => SetAnswer("-")}>-</ResultBtn>}
      </div>
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

    &:nth-child(10) {
      grid-column: 2/3;
      grid-row: 4/5;
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
      transform: translate(-5px, 3px  );
      height: 25px;
      width: 25px;
    }
  }
`
