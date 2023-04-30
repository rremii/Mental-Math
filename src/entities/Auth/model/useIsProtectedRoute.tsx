import { useLocation } from "react-router"
import { AuthProtectedRoutes } from "../constants/ProtectedRoutes"


export const useIsProtectedRoute = () => {
  const location = useLocation()

  const IsProtectedRoute = (): boolean => {
    return AuthProtectedRoutes.includes(location.pathname)
  }

  return { IsProtectedRoute }
}

