import { ShuffleArray } from "@shared/helpers/ShuffleArray"

export const GetAnswersArr = (answer: number) => {

  const initialAnswers = [0, 0, 0]

  const falsyAnswers = initialAnswers.map(() => {
    if (Math.random() < 0.5) {
      return answer + Math.ceil(Math.random() * 10 + 1)
    } else {
      return answer - Math.ceil(Math.random() * 10 + 1)
    }
  })
  return ShuffleArray([...falsyAnswers, answer]) as number[]

}
