import { Form } from "@shared/ui/Form"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/Hooks/store-hooks"
import { setLoginError } from "@entities/Auth/model/AuthSlice"
import { useToast } from "@shared/Hooks/useToast"
import useLogin from "@entities/Auth/model/useLogin"


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

  const { register, handleSubmit, reset } = useForm<FormFields>({
    resolver: yupResolver(schema)
  })

  const { Login, isError, isLoading } = useLogin()


  const OnSubmit = async (data: FormFields) => {
    await Login(data)
    reset()
  }

  return <Form isPending={isLoading} isError={isError}  {...LoginFormData} OnSubmit={handleSubmit(OnSubmit)}>
    <input type="email" {...register("email")} placeholder="Email" />
    <input type="password"  {...register("password")} placeholder="Password" />
  </Form>

}

