import { RegisterDto } from "@entities/Auth/types"
import { useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useToast } from "@shared/Hooks/useToast"
import { FormFields } from "@entities/Auth/ui/SignUpForm"
import { useNavigate } from "react-router-dom"
import { useTypedSelector } from "@shared/Hooks/store-hooks"

const UseRegister = () => {
  const navigate = useNavigate()

  const isError = useTypedSelector(state => state.Toast.isShown)


  const { ShowToast } = useToast(5000)


  const [register, { isSuccess, isLoading, data }] = useRegisterMutation()

  useEffect(() => {
    if (!data) return
    localStorage.setItem("accessToken", data.accessToken)
    navigate("/game-menu")
  }, [isSuccess, data])

  const Register = async (data: RegisterDto) => {
    await register({ ...data, avatar: "avatar1" }).unwrap().catch(err => {
      ShowToast(err.message)
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
export default UseRegister
