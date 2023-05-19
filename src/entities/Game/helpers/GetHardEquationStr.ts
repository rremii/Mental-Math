export const GetHardEquationStr = (signs: string[], elements: Array<number | string>) => {
  return elements[0].toString() + " " + signs[0] + " " + elements[1].toString() + " " + signs[1] + " " + elements[2].toString() + " = " + elements[3].toString()
}
