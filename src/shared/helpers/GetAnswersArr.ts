import { ShuffleArray } from "@shared/helpers/ShuffleArray"

export const GetAnswersArr = (answer: number, amount = 4) => {


  const falsyAnswers: number[] = []

  for (let i = 0; i < amount - 1; i++) {
    let curAnswer: number
    if (Math.random() < 0.5) {
      curAnswer = answer + Math.ceil((Math.random() * 10 + 1))
    } else {
      curAnswer = answer - Math.ceil((Math.random() * 10 + 1))
    }
    falsyAnswers.push(curAnswer)
  }

  return ShuffleArray([...falsyAnswers, answer]) as number[]

}
