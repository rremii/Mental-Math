import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import Pencil from "@shared/assets/DarkTheme/pencil.svg"

interface props {
  labelText?: string
  onClick?: () => void
  onBlur?: (inputText: string) => void
  isLoading: boolean
}

export const LabelWithEdit = ({ labelText = "", onClick, onBlur, isLoading }: props) => {


  const [isEdit, setEdit] = useState(false)
  const [label, setLabel] = useState<string>(labelText)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setLabel(labelText)
  }, [labelText])
  useEffect(() => {
    inputRef.current?.focus()
  }, [isEdit])

  const SetEdit = () => {
    if (isLoading || !inputRef.current) return
    setEdit(true)
    inputRef.current.value = label
    if (onClick)
      onClick()
  }
  const OnBlur = () => {
    if (!onBlur || !inputRef.current) return
    setEdit(false)
    setLabel(inputRef.current.value)
    onBlur(inputRef.current.value)
  }

  return <LabelLayout onClick={SetEdit} isEdit={isEdit} className="inputWithEdit">

    <div className="labelBox">
      <label htmlFor="label">{label}
        <img className="edit" src={Pencil} alt="edit" />
      </label>
    </div>

    <div className="inputBox">
      <input ref={inputRef} onBlur={OnBlur} type="text" />
    </div>
    <div className="lineBottom" />
  </LabelLayout>
}
const LabelLayout = styled.div<{
  isEdit: boolean
}>`
  width: 100%;
  position: relative;
  height: 48px;
  cursor: pointer;

  .inputBox {
    display: ${({ isEdit }) => isEdit ? "initial" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    //background-color: red;
    input {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      padding: 0 20px;

      color: white;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
  }

  .labelBox {
    display: ${({ isEdit }) => isEdit ? "none" : "block"};
    border-radius: 5px 5px 0 0;
    transition: 0.2s background-color;
    padding: 0 20px;
    width: 100%;
    height: 100%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    label {
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      cursor: pointer;

      color: #FFFFFF;
      position: relative;

      .edit {
        position: absolute;
        top: 0;
        left: calc(100% + 10px);
        width: 30px;
        height: 30px;
      }
    }
  }


  .lineBottom {
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(217, 217, 217, 0.49);
    border-radius: 50px;
    width: 100%;
    height: 2px;
  }

`
