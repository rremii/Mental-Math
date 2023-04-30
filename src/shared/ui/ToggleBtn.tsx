import styled from "styled-components"
import { boolean } from "yup"
import { FC, useState } from "react"

interface props {
  isActive: boolean
}

export const ToggleBtn: FC<props> = ({ isActive }) => {


  return <BtnLayout isActive={isActive}>
    <span />
  </BtnLayout>
}
const BtnLayout = styled.button<{ isActive: boolean }>`
  width: 75px;
  height: 29px;
  border-radius: 50px;
  border: 1px solid var(--btn-border-color);
  position: relative;
  overflow: hidden;
  background-color: ${({ isActive }) => isActive ? "var(--toggle-btn)" : "transparent"};
  transition: .4s;

  span {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    top: 50%;
    //left: calc(100% - 27px);
    transition: .4s;
    left: ${({ isActive }) => isActive ? "calc(100% - 27px)" : "2px"};
    border-radius: 50%;
    background-color: var(--sub-background);
    transform: translateY(-50%);
    box-shadow: ${({ isActive }) => isActive ? "var(--toggle-btn-shadow) 0px 0px 10px" : ""};


    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-45%, -50%);
      width: 17px;
      height: 3px;
      background: ${({ isActive }) => isActive ? "var(--toggle-btn)" : "var(--default-menu-bg-color)"};

      border-radius: 3px;

    }

    &:before {
      content: '';
      position: absolute;
      top: 45%;
      left: 20%;
      transition: 0.4s;
      border-radius: 3px;
      transform: ${({ isActive }) => isActive ? "rotate(-90deg)" : "rotate(0)"};
      width: 17px !important;
      height: 3px !important;
      background: ${({ isActive }) => isActive ? "var(--toggle-btn)" : "var(--default-menu-bg-color)"};
    }


  }
`
