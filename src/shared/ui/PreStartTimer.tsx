import styled from "styled-components"
import { FC, useEffect, useState } from "react"

interface props {
  initTime: number
  timeGap: number
}


export const PreStartTimer: FC<props> = ({ initTime, timeGap }) => {

  const [time, setTime] = useState(initTime)

  useEffect(() => {
    if (time <= 1) return
    const timer = setTimeout(() => {
      setTime(time => time - timeGap)
    }, timeGap * 1000)

    return () => window.clearTimeout(timer)
  }, [time])


  return <TimerLayout className={"preStartTimer"}>
    <span>{time}</span>
  </TimerLayout>
}
const TimerLayout = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;

  align-items: center;
  justify-content: center;


  span {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 30px;
    /* identical to box height, or 75% */

    letter-spacing: 0em;
    color: #FFFFFF;
    animation: scaleDown 1s infinite;
  }

  @keyframes scaleDown {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    10% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.3);
    }
  }


`
