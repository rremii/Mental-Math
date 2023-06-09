import styled from "styled-components"
import { useEffect, useState } from "react"

interface props {
  content: string
  speed: number
  delay: number
}

export const TypeWriter = ({ content = "", speed = 1000, delay = 0 }: props) => {
  const [displayedContent, setDisplayedContent] = useState("")
  const [index, setIndex] = useState(0)
  const [isStarted, setStart] = useState(false)


  useEffect(() => {
    if (!content) return
    if (!isStarted) {
      const delayTimer = setTimeout(() => {
        setStart(true)
      }, delay)
      return () => clearTimeout(delayTimer)
    }
    if (isStarted) {
      const timer = setTimeout(() => {
        setIndex((index) => {

          if (index >= content.length) {
            return index
          }

          setDisplayedContent((displayedContent) => displayedContent + content[index])

          return index + 1
        })
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [displayedContent, isStarted, content])


  return <TextLayout>{displayedContent}</TextLayout>
}
const TextLayout = styled.pre`
  font-family: 'Rubik Glitch', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  color: var(--typing-animation-color);
  @keyframes blink {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  &::after {
    background-color: var(--typing-animation-sub-color);
    content: "|";
    animation: blink 1s infinite;
  }
`
