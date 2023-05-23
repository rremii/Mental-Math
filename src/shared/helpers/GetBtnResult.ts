import { resultType } from "@entities/Game"

interface props {
  clickedBtnId: number | null
  btnId: number
  result: resultType
  answer: number | string
  correctAnswer: number | null
}

export const GetBtnResult = ({ btnId, clickedBtnId, result, answer, correctAnswer }: props): resultType => {
  if (btnId === clickedBtnId && result === "fail") return "fail"
  if (btnId === clickedBtnId && result === "success") return "success"
  if (answer === correctAnswer && result === "fail") return "success"

  return "initial"
}
