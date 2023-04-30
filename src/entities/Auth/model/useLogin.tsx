import { LoginDto } from "@entities/Auth/types"
import { useLoginMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useToast } from "@shared/Hooks/useToast"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setAuthRejected, setAuthSuccess } from "@entities/Auth/model/AuthSlice"

const UseLogin = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isError = useTypedSelector(state => state.Toast.isShown)


  const { ShowToast } = useToast(5000)


  const [login, { isSuccess, isLoading, data }] = useLoginMutation()

  useEffect(() => {
    if (!data) return
    localStorage.setItem("accessToken", data.accessToken)
    dispatch(setAuthSuccess())
    navigate("/game-menu")
  }, [isSuccess, data])

  const Login = async (data: LoginDto) => {
    await login(data).unwrap().catch(err => {
      ShowToast(err.message)
      dispatch(setAuthRejected())
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
