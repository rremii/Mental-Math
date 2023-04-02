import { Form } from "@shared/ui/Form"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import useRegister from "@entities/Auth/model/useRegister"
import { useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"

export interface FormFields {
  userName: string
  email: string;
  password: string;
}


const schema = yup.object().shape({
  userName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required()
}).required()


const SignUpFormData = {
  btnText: "Sign Up",
  linkText: "Already have an account?",
  title: "Sign Up",
  linkHref: "login"
}

export const SignUpForm = () => {
  const navigate = useNavigate()


  const { register: reg, handleSubmit, reset } = useForm<FormFields>({
    resolver: yupResolver(schema) // yup, joi and even your own.
  })

  const [register, { isLoading, data }] = useRegisterMutation()

  useEffect(() => {
    debugger
    console.log(data)
  }, [isLoading, data])
  // const Register = useRegister()

  const OnSubmit = (data: FormFields) => {

    register({ ...data, avatar: "avatar1" })


    reset()
    navigate("/game-menu")
  }

  return <Form {...SignUpFormData} OnSubmit={handleSubmit(OnSubmit)}>
    <input autoComplete={"off"} type="text" {...reg("userName")} placeholder="Name" />
    <input autoComplete={"off"} type="email" {...reg("email")} placeholder="Email" />
    <input autoComplete={"off"} type="password"  {...reg("password")} placeholder="Password" />
  </Form>

}

