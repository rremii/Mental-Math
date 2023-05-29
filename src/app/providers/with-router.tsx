import { FC, Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import LoadingPage from "../../pages/Loading/LoadingPage"

export const withRouter = (Component: FC) => () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  </BrowserRouter>
)
