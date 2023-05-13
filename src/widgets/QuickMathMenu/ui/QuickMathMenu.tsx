import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useStage } from "@entities/QuickMath"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useIsPreStart } from "@entities/QuickMath/model/useIsPreStart"
import { PreStartTimer } from "@shared/ui/PreStartTimer"
import { GetBtnResult } from "@entities/QuickMath/helpers/GetBtnResult"
import { PreStartGap, PreStartTime } from "@entities/QuickMath/constants"


export const QuickMathMenu = () => {

  const stage = useTypedSelector(state => state.QuickMath.stage)
  const result = useTypedSelector(state => state.QuickMath.result)
  const stageState = useTypedSelector(state => state.QuickMath.stageState)
  const clickedBtnId = useTypedSelector(state => state.QuickMath.clickedBtnId)
  const equation = useTypedSelector(state => state.QuickMath.equation)
  const answers = useTypedSelector(state => state.QuickMath.answers)
  const correctAnswer = useTypedSelector(state => state.QuickMath.correctAnswer)

  useIsPreStart()

  const { stageTime, HandleFail, HandleSuccess } = useStage()


  const CheckAnswer = (answer: number, clickedBtnId: number) => {
    if (correctAnswer === answer) HandleSuccess(clickedBtnId)
    else HandleFail(clickedBtnId, answer)
  }

  return <QuickMathLayout>
    <GameHeader time={stageTime} currentScore={stage} />
    <ProgressBar progress={stageTime / 10} />
    {stageState !== "preStart" ? <EquationSection equation={equation} />
      : <>
        <h3 className="preTitle">Choose the right answer</h3>
        <PreStartTimer initTime={PreStartTime} timeGap={PreStartGap} /></>}
    <ButtonsSection>

      {answers?.map((answer, btnId) => {
        const btnResult = GetBtnResult({
          btnId,
          result,
          clickedBtnId,
          correctAnswer,
          answer
        })
        return <ResultBtn isDisabled={result !== "initial" || stageState !== "running"} result={btnResult}
                          onClick={() => CheckAnswer(+answer, btnId)}
                          key={btnId}>{answer}</ResultBtn>
      })}
    </ButtonsSection>
  </QuickMathLayout>
}
const QuickMathLayout = styled.div`
  background: var(--game-menu-bg);
  width: 100%;
  height: 100%;
  color: var(--main-text-color);
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px;

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
`
