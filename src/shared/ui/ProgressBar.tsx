import styled from "styled-components"
import { FC } from "react"


interface props {
  progress: number //0.1 = 10%
}

export const ProgressBar: FC<props> = ({ progress }) => {

  return <ProgressBarLayout progress={progress} />
}
const ProgressBarLayout = styled.div<{
  progress: number
}>`
  height: 38px;
  width: 100%;
  background-color: var(--progress-bar-color);
  position: relative;
  border-radius: 5px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ progress }) => progress ? progress * 100 + "%" : "0"};
    height: 100%;
    transition: 1s;
    background-color: var(--progress-bar-fill-color);
    border-radius: inherit;
  }



`
