export const GetEquationString = (sign: string, elements: Array<number | string>) => {

  return elements[0].toString() + " " + sign + " " + elements[1].toString() + " = " + elements[2].toString()
}
