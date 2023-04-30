import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/LoginPage"
import SignUp from "./SignUp/SignUpPage"
import useIsAuth from "@entities/Auth/model/useIsAuth"
import { useChangeTheme } from "@widgets/SettingsMenu/hooks/useChangeTheme"
import GameMenu from "./GameMenu/GameMenuPage"

// const GameMenu = lazy(() => import("./GameMenu/GameMenuPage"))


export const Routing = () => {

  const { isLoggedIn, isPending } = useIsAuth()
  useChangeTheme()

  return (
    <Routes>
      {!isPending && isLoggedIn === "success" && <>
        <Route path="/game-menu" element={<GameMenu />} />
      </>}
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
