import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/LoginPage"
import SignUp from "./SignUp/SignUpPage"
import GameMenu from "./GameMenu/GameMenuPage"
import { useIsAuth } from "@entities/Auth"
import { useChangeTheme } from "@entities/Settings"
import QuickMath from "./QuickMath/QuickMathPage"
import QuickMathBests from "./QuickMathBests/QuickMathBestsPage"
import HardMath from "./HardMath/HardMathPage"
import HardMathBests from "./HardMathBests/HardMathBestsPage"
import InputMath from "./InputMath/InputMathPage"
import { InputMathBestsMenu } from "@widgets/InputMathBestsMenu"
import InputMathBests from "./InputMathBests/InputMathBestsPage"
import TrueFalseMath from "./TrueFalseMath/TrueFalseMathPage"
import TrueFalseMathBests from "./TrueFalseMathBests/TrueFalseMathBestsPage"
import BalanceMath from "./BalanceMath/BalanceMathPage"

// const GameMenu = lazy(() => import("./GameMenu/GameMenuPage"))


export const Routing = () => {

  const { isLoggedIn, isPending } = useIsAuth()
  useChangeTheme()

  return (

    <Routes>
      {!isPending && isLoggedIn === "success" && <>
        <Route path="/quick-math" element={<QuickMath />} />
        <Route path="/hard-math" element={<HardMath />} />
        <Route path="/input-math" element={<InputMath />} />
        <Route path="/true-false-math" element={<TrueFalseMath />} />
        <Route path="/balance-math" element={<BalanceMath />} />
        <Route path="/leaderboard/quick-math" element={<QuickMathBests />} />
        <Route path="/leaderboard/hard-math" element={<HardMathBests />} />
        <Route path="/leaderboard/input-math" element={<InputMathBests />} />
        <Route path="/leaderboard/true-false-math" element={<TrueFalseMathBests />} />
        <Route path="/" element={<GameMenu />} />
      </>}
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}
