import React, { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/LoginPage"
import SignUp from "./SignUp/SignUpPage"
import GameMenu from "./GameMenu/GameMenuPage"
import { useIsAuth } from "@entities/Auth"
import { useChangeTheme } from "@entities/Settings"
import LoadingPage from "./Loading/MainLoadingPage"

// import QuickMath from "./QuickMath/QuickMathPage"
// import QuickMathBests from "./QuickMathBests/QuickMathBestsPage"
// import HardMath from "./HardMath/HardMathPage"
// import HardMathBests from "./HardMathBests/HardMathBestsPage"
// import InputMath from "./InputMath/InputMathPage"
// import InputMathBests from "./InputMathBests/InputMathBestsPage"
// import TrueFalseMath from "./TrueFalseMath/TrueFalseMathPage"
// import TrueFalseMathBests from "./TrueFalseMathBests/TrueFalseMathBestsPage"
// import BalanceMath from "./BalanceMath/BalanceMathPage"
// import BalanceMathBests from "./BalanceMathBests/BalanceMathBestsPage"
//
const QuickMath = lazy(() => import("./QuickMath/QuickMathPage"))
const QuickMathBests = lazy(() => import("./QuickMathBests/QuickMathBestsPage"))
const HardMath = lazy(() => import("./HardMath/HardMathPage"))
const HardMathBests = lazy(() => import("./HardMathBests/HardMathBestsPage"))
const InputMath = lazy(() => import("./InputMath/InputMathPage"))
const InputMathBests = lazy(() => import("./InputMathBests/InputMathBestsPage"))
const TrueFalseMath = lazy(() => import("./TrueFalseMath/TrueFalseMathPage"))
const TrueFalseMathBests = lazy(() => import("./TrueFalseMathBests/TrueFalseMathBestsPage"))
const BalanceMath = lazy(() => import("./BalanceMath/BalanceMathPage"))
const BalanceMathBests = lazy(() => import("./BalanceMathBests/BalanceMathBestsPage"))


export const Routing = () => {

  const { isLoggedIn, isPending } = useIsAuth()
  useChangeTheme()


  return (<>
      {isPending && <LoadingPage />}
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
          <Route path="/leaderboard/balance-math" element={<BalanceMathBests />} />
          <Route path="/" element={<GameMenu />} />
        </>}
        {isLoggedIn !== "first loading" && <>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </>}
      </Routes>
    </>
  )
}
