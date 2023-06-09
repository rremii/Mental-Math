import { RegisterDto } from "@entities/Auth/types"
import { useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useToast } from "@shared/Hooks/useToast"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAuthRejected, setAuthSuccess } from ".."

const ToastDuration = 5

export const useRegister = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isError = useTypedSelector(state => state.Toast.isShown)


  const { ShowToast } = useToast(ToastDuration * 1000)


  const [register, { isSuccess, isLoading, data }] = useRegisterMutation()

  useEffect(() => {
    if (!data) return
    localStorage.setItem("accessToken", data.accessToken)
    dispatch(setAuthSuccess())
    navigate("/")
  }, [isSuccess, data])

  const Register = async (data: RegisterDto) => {
    await register({ ...data }).unwrap().catch(err => {
      ShowToast(err.message)
      dispatch(setAuthRejected())
    })

  }

  return {
    Register,
    isLoading,
    isSuccess,
    data,
    isError
  }


}
