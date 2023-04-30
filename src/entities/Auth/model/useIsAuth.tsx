import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { useNavigate } from "react-router-dom"
import { useRefresh } from ".."
import { useIsProtectedRoute } from "./useIsProtectedRoute"


export const useIsAuth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const isLoggedIn = useTypedSelector((state) => state.Auth.isLoggedIn)
  const isPending = useTypedSelector((state) => state.Auth.isPending)


  const { Refresh } = useRefresh()
  const { IsProtectedRoute } = useIsProtectedRoute()


  useEffect(() => {
    if (!IsProtectedRoute()) return
    if (!localStorage.getItem("accessToken")) navigate("./login")
    // if access token is dead then check refresh
    if (isLoggedIn === "first loading") Refresh()
  }, [])

  useEffect(() => {
    if (!IsProtectedRoute()) return
    // if login\refresh was rejected
    if (isLoggedIn === "rejected") navigate("./login")
  }, [dispatch, isLoggedIn])

  return { isPending, isLoggedIn }
}

