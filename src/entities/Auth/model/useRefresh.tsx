import { LoginDto, RegisterDto } from "@entities/Auth/types"
import { refresh, useLoginMutation, useRefreshQuery, useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useToast } from "@shared/Hooks/useToast"
import { FormFields } from "@entities/Auth/ui/SignUpForm"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAuthRejected, setAuthSuccess } from "@entities/Auth/model/AuthSlice"

const UseRefresh = () => {
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
export default UseRefresh
