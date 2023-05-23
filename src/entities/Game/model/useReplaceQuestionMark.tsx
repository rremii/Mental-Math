import { useEffect, useState } from "react"

export const useReplaceQuestionMark = (equation: string, str: string | number | null) => {


  const [questionMarkPosition, setPosition] = useState<number | null>(null)
  const [transformedEquation, setTransformedEquation] = useState<string>(equation)

  useEffect(() => {
    setPosition(null)

    const equationArr = equation.split(" ")

    if (!equationArr.includes("?")) return

    equationArr.forEach((el, i) => {
      if (el === "?") setPosition(i)
    })

  }, [equation])


  useEffect(() => {
    if (questionMarkPosition === null) return

    const equationArr = equation.split(" ")

    const resultEquation = equationArr.map((el, i) => {
      if (i !== questionMarkPosition || str === null) return el
      if (!el && +str !== 0) return "?"
      return str
    })
    setTransformedEquation(resultEquation.join(" "))
  }, [questionMarkPosition, str])


  return { transformedEquation }

}
