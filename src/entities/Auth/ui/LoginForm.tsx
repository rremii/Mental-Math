import { Form } from "@shared/ui/Form"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()


  const { register, handleSubmit, reset } = useForm<FormFields>({
    resolver: yupResolver(schema) // yup, joi and even your own.
  })

  const OnSubmit = (data: FormFields) => {
    console.log(data)
    reset()
    navigate("/game-menu")
  }

  return <Form {...LoginFormData} OnSubmit={handleSubmit(OnSubmit)}>
    <input type="email" {...register("email")} placeholder="Email" />
    <input type="password"  {...register("password")} placeholder="Password" />
  </Form>

}

