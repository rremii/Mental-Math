import { FC, Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import GameLoadingPage from "../../pages/Loading/GameLoadingPage"

export const withRouter = (Component: FC) => () => (
  <BrowserRouter>
    <Suspense fallback={<GameLoadingPage />}>
      <Component />
    </Suspense>
  </BrowserRouter>
)
