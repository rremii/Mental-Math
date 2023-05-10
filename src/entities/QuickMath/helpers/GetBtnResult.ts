import { resultType } from "@entities/QuickMath/types"

interface props {
  clickedBtnId: number
  btnId: number
  result: resultType
  answer: number
  correctAnswer: number
}

export const GetBtnResult = ({ btnId, clickedBtnId, result, answer, correctAnswer }: props): resultType => {

  if (btnId === clickedBtnId && result === "fail") return "fail"
  if (btnId === clickedBtnId && result === "success") return "success"
  if (answer === correctAnswer && result === "fail") return "success"

  return "initial"
}
