import styled from "styled-components"
import { ButtonsSection } from "@shared/ui/ButtonsSection"
import { EquationSection } from "@shared/ui/EquationSection"
import { GameHeader } from "@shared/ui/GameHeader"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { ResultBtn } from "@shared/ui/ResultBtn"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { PreStartTimer } from "@shared/ui/PreStartTimer"
import { GetBtnResult } from "@shared/helpers/GetBtnResult"
import { HardStageTime, PreStartGap, PreStartTime, TrueFalseStageTime, useIsPreStart, useStage } from "@entities/Game"
import { useHardEquation } from "@entities/Game/model/useHardEquation"
import { useUpdateHardMathScoreMutation } from "@entities/Game/api/HardMathApi"
import { useGetUserQuery } from "@entities/User"
import { useQuickEquation } from "@entities/Game/model/useQuickEquation"
import { useReplaceQuestionMark } from "@entities/Game/model/useReplaceQuestionMark"
import { GetRandomArrElId } from "@shared/helpers/GetRandomArrElId"
import { useEffect, useState } from "react"

function GetRandomArrEl<T>(arr: T[]) {
  return arr[GetRandomArrElId(arr)]
}

export const TrueFalseMathMenu = () => {
  const stage = useTypedSelector(state => state.Stage.stage)
  const result = useTypedSelector(state => state.Stage.result)
  const stageState = useTypedSelector(state => state.Stage.stageState)
  const clickedBtnId = useTypedSelector(state => state.Stage.clickedBtnId)
  const equation = useTypedSelector(state => state.Game.equation)
  const trueFalseAnswers = useTypedSelector(state => state.Game.trueFalseAnswers)
  const correctAnswer = useTypedSelector(state => state.Game.correctAnswer)
  const quickAnswers = useTypedSelector(state => state.Game.quickAnswers)

  const [curAnswer, setCurAnswer] = useState(quickAnswers[0])

  useEffect(() => {
    setCurAnswer(quickAnswers[0])
  }, [quickAnswers])

  useIsPreStart()


  const { updateEquation } = useQuickEquation(2)
  const { transformedEquation } = useReplaceQuestionMark(equation, curAnswer)
  // const [updateHardMathScore] = useUpdateHardMathScoreMutation()
  // const { data: user } = useGetUserQuery()

  // const UpdateUserScore = () => {
  //   if (!user) return
  //   updateHardMathScore({ newScore: stage, userId: user.id })
  // }

  const { stageTime, HandleFail, HandleSuccess } = useStage(updateEquation, () => undefined, TrueFalseStageTime)


  const CheckAnswer = (answer: "true" | "false", clickedBtnId: number) => {
    if (correctAnswer === curAnswer && answer === "true") return HandleSuccess(clickedBtnId)
    if (correctAnswer !== curAnswer && answer === "false") return HandleSuccess(clickedBtnId)
    else HandleFail(+curAnswer, clickedBtnId)
  }

  return <TrueFalseMathLayout>
    <GameHeader time={stageTime} currentScore={stage} />
    <ProgressBar progress={stageTime / TrueFalseStageTime} />
    {stageState === "preStart" ? <>
        <h3 className="preTitle">Choose the right answer</h3>
        <PreStartTimer initTime={PreStartTime} timeGap={PreStartGap} /></>
      : <EquationSection equation={transformedEquation} />
    }
    <ButtonsSection>

      {trueFalseAnswers?.map((answer, btnId) => {
        const btnResult = GetBtnResult({
          btnId,
          result,
          clickedBtnId,
          correctAnswer,
          answer
        })
        return <ResultBtn isDisabled={result !== "initial" || stageState !== "running"} result={btnResult}
                          onClick={() => CheckAnswer(answer, btnId)}
                          key={btnId}>{answer}</ResultBtn>
      })}
    </ButtonsSection>
  </TrueFalseMathLayout>
}
const TrueFalseMathLayout = styled.div`
  background: var(--game-menu-bg);
  width: 100%;
  height: 100%;
  color: var(--main-text-color);
  display: flex;
  flex-direction: column;
  padding: 0 20px 25px;
  @media screen and (max-width: 600px) {
    padding: 0 20px 70px;

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
`