const IterateThroughTheEquation = (equationArr: string[]) => {
  let curNum: number | null = null

  equationArr.forEach((el: string, i) => {
    if (el === "+" && +equationArr[i + 1]) {
      if (!curNum) curNum = 0
      curNum = Number(curNum + +equationArr[i + 1])
    }
    if (el === "-" && +equationArr[i + 1]) {
      if (!curNum) curNum = 0
      curNum = Number(curNum - +equationArr[i + 1])
    }
    if (el === "x" && +equationArr[i + 1]) {
      if (!curNum) curNum = 1
      curNum = Number(curNum * +equationArr[i + 1])
    }
    if (+el && !curNum && curNum !== 0) {
      curNum = +el
    }
  })

  return curNum
}

export const SolveEquation = (equation: string) => {

  const [equationStringLeft, equationStringRight] = equation.split("=")

  const equationArrLeft = equationStringLeft.split(" ")

  let sign: string = "+" //sign of ?
  let resNum: null | number = null

  if (equationArrLeft.includes("x")) {
    sign = "x"
  } else {
    equationArrLeft.forEach((el, i) => {
      if (el === "?" && equationArrLeft[i - 1]) sign = equationArrLeft[i - 1]
    })
  }


  if (equationStringRight === " ?") {
    resNum = IterateThroughTheEquation(equationArrLeft)
  }
  if (equationArrLeft.includes("?")) {
    if (equationArrLeft.includes("x")) {
      const res = IterateThroughTheEquation(equationArrLeft)
      resNum = +equationStringRight / (res ? res : 1)
    }
    if (sign === "+") {
      const res = IterateThroughTheEquation(equationArrLeft)
      resNum = +equationStringRight - (res ? res : 0)
    }
    if (sign === "-") {
      const res = IterateThroughTheEquation(equationArrLeft)
      resNum = (res ? res : 0) - +equationStringRight
    }
  }
  return resNum ? resNum : 0
}
