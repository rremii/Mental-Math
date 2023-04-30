import { ToggleBtn } from "@shared/ui/ToggleBtn"
import styled from "styled-components"
import { useLocalStorage } from "@shared/Hooks/useLocalStorage"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setDarkMode } from "@widgets/SettingsMenu/model/SettingsSlice"

export const ToggleTheme = () => {
  const dispatch = useAppDispatch()
  const isDarkMode = useTypedSelector(state => state.SettingsMenu.isDarkMode)

  const ChangeDarkMode = () => {
    dispatch(setDarkMode(!isDarkMode))
    localStorage.setItem("isDarkMode", !isDarkMode + "")
  }

  return <ToggleBtnLayout onClick={ChangeDarkMode}>
    <ToggleBtn isActive={isDarkMode} />
    <span>Dark Mode</span>
  </ToggleBtnLayout>
}
const ToggleBtnLayout = styled.div`

  display: flex;
  gap: 30px;
  align-items: center;

  &:hover {
    background-color: var(--hover1-color);
  }

  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;

  span {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 39px;
    /* identical to box height */


    color: var(--main-text-color);
  }
`
