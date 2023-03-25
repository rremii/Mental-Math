import styled from "styled-components"
import { useEffect, useState } from "react"


export const TypeWriter = ({ content = "", speed = 1000 }) => {
  const [displayedContent, setDisplayedContent] = useState("")
  const [index, setIndex] = useState(0)


  useEffect(() => {
      const timer = setTimeout(() => {
        setIndex((index) => {

          if (index >= content.length - 1) {
            return index
          }

          setDisplayedContent((displayedContent) => displayedContent + content[index])

          return index + 1
        })
      }, speed)


      return () => clearTimeout(timer)
    }, [displayedContent]
  )


  return <TextLayout>{displayedContent}</TextLayout>
}
const TextLayout = styled.pre`
  font-family: 'Rubik Glitch', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  color: #d3c1f1;
  @keyframes blink {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }

  &::after {
    background-color: rgba(82, 255, 99, 1);
    content: "|";
    animation: blink 1s infinite;
  }
`
