import { refresh, useRefreshQuery } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setAuthRejected, setAuthSuccess } from ".."

export const useRefresh = () => {
  const dispatch = useAppDispatch()

  const { data, isError } = useRefreshQuery()


  useEffect(() => {
    if (data) {
      localStorage.setItem("accessToken", data.accessToken)
      dispatch(setAuthSuccess())
    }
    if (!data && isError) dispatch(setAuthRejected())
  }, [data, isError])


  const Refresh = async () => {
    await dispatch(refresh.initiate())
  }

  return {
    Refresh
  }


}
