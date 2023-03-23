import { lazy, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

const GameMenu = lazy(() => import("./GameMenu/GameMenuPage"))

export const Routing = () => {
  const navigate = useNavigate()


  useEffect(() => {
    navigate("game-menu")
  }, [])

  return (
    <Routes>
      <Route path="/game-menu" element={<GameMenu />} />
    </Routes>
  )
}
