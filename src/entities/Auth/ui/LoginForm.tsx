import { Form } from "@shared/ui/Form"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useAppDispatch } from "@shared/Hooks/store-hooks"
import { setLoginError } from "@entities/Auth/model/AuthSlice"

// import { useToast } from "@shared/Hooks/useToast"

export interface FormFields {
  email: string;
  password: string;
}


const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
}).required()


const LoginFormData = {
  btnText: "Sign In",
  linkText: "Don't have an account yet?",
  title: "Sign In",
  linkHref: "sign-up"
}

export const LoginForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  // const { showToast } = useToast()


  // const [loginError, setLoginError] = useState<string>()

  const { register, handleSubmit, reset } = useForm<FormFields>({
    resolver: yupResolver(schema) // yup, joi and even your own.
  })

  const [login, { isLoading, data, error }] = useLoginMutation()

  useEffect(() => {
      if (data) {
        localStorage.setItem("accessToken", data.accessToken)
        navigate("/game-menu")
      }
      if (error && error.message) {
        // debugger
        // dispatch(setLoginError(error.message))
      }
    }, [isLoading, data, error]
  )


  const OnSubmit = async (data: FormFields) => {

    await login(data).unwrap().catch(err => {
      debugger
    })


    reset()
  }

  return <Form error={error?.message}  {...LoginFormData} OnSubmit={handleSubmit(OnSubmit)}>
    <input type="email" {...register("email")} placeholder="Email" />
    <input type="password"  {...register("password")} placeholder="Password" />
  </Form>

}

