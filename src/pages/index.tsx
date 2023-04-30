import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/LoginPage"
import SignUp from "./SignUp/SignUpPage"
import GameMenu from "./GameMenu/GameMenuPage"
import { useIsAuth } from "@entities/Auth"
import { useChangeTheme } from "@entities/Settings"

// const GameMenu = lazy(() => import("./GameMenu/GameMenuPage"))


export const Routing = () => {

  const { isLoggedIn, isPending } = useIsAuth()
  useChangeTheme()

  return (

    <Routes>
      {!isPending && isLoggedIn === "success" && <>
        <Route path="/" element={<GameMenu />} />
      </>}
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
