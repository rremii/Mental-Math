import { Form } from "@shared/ui/Form"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
import useRegister from "@entities/Auth/model/useRegister"
import { useLoginMutation, useRegisterMutation } from "@entities/Auth/api/AuthApi"
import { useEffect } from "react"
import { useTypedSelector } from "@shared/Hooks/store-hooks"
import { useToast } from "@shared/Hooks/useToast"

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


  const avatar = useTypedSelector(state => state.AvatarMenu.avatar)

  const { register: reg, handleSubmit, reset } = useForm<FormFields>({
    resolver: yupResolver(schema)
  })

  const { Register, isError, isLoading } = useRegister()


  const OnSubmit = async (data: FormFields) => {
    await Register({ ...data, avatar })
    reset()
  }


  return <Form isPending={isLoading} isError={isError} {...SignUpFormData} OnSubmit={handleSubmit(OnSubmit)}>
    <input autoComplete={"off"} type="text" {...reg("userName")} placeholder="Name" />
    <input autoComplete={"off"} type="email" {...reg("email")} placeholder="Email" />
    <input autoComplete={"off"} type="password"  {...reg("password")} placeholder="Password" />
  </Form>

}

