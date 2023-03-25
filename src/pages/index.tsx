import { lazy, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login/LoginPage"
import SignUp from "./SignUp/SignUpPage"

const GameMenu = lazy(() => import("./GameMenu/GameMenuPage"))

export const Routing = () => {
  const navigate = useNavigate()


  useEffect(() => {
    navigate("login")
  }, [])

  return (
    <Routes>
      <Route path="/game-menu" element={<GameMenu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
