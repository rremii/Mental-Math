import { LoginDto, RegisterDto } from "@entities/Auth/types"
import { useLoginMutation, useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useToast } from "@shared/Hooks/useToast"
import { FormFields } from "@entities/Auth/ui/SignUpForm"
import { useNavigate } from "react-router-dom"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

const UseLogin = () => {
  const navigate = useNavigate()

  const isError = useTypedSelector(state => state.Toast.isShown)


  const { ShowToast } = useToast(5000)


  const [login, { isSuccess, isLoading, data }] = useLoginMutation()

  useEffect(() => {
    if (!data) return
    localStorage.setItem("accessToken", data.accessToken)
    navigate("/game-menu")
  }, [isSuccess, data])

  const Login = async (data: LoginDto) => {
    await login(data).unwrap().catch(err => {
      ShowToast(err.message)
    })
  }

  return {
    Login,
    isLoading,
    isSuccess,
    data,
    isError
  }


}
export default UseLogin
