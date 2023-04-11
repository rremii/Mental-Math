import { useLocation } from "react-router"
import { AuthProtectedRoutes } from "@entities/Auth/constants/ProtectedRoutes"


const UseIsProtectedRoute = () => {
  const location = useLocation()

  const IsProtectedRoute = (): boolean => {
    return AuthProtectedRoutes.includes(location.pathname)
  }

  return { IsProtectedRoute }
}
export default UseIsProtectedRoute

