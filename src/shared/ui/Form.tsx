import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
}).required()

export const Form = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(schema) // yup, joi and even your own.
  })

  const OnSubmit = (data: Inputs) => {
    console.log(data)
    reset()
    navigate("/game-menu")
  }

  return <FormLayout onSubmit={handleSubmit(OnSubmit)}>
    <div className="title">
      <h2>Sign In</h2>
    </div>
    <div className="input-box">
      <input type="email" {...register("email")} placeholder="Email" />
      <input type="password"  {...register("password")} placeholder="Password" />
    </div>
    <div className="submit-box">
      <button type="submit">Sign In</button>
    </div>
    <NavLink to="#" className="link">
      Already have an account?
    </NavLink>
  </FormLayout>
}
const FormLayout = styled.form`

  width: 280px;
  min-height: 430px;
  background: linear-gradient(179.5deg, #240E2C 0.43%, rgba(124, 60, 154, 0.32) 95.39%);
  border-radius: 90px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 26px 0;

  .title {
    margin-bottom: 56px;

    h2 {

      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 52px;
      /* identical to box height */
      color: #FFFFFF;
    }
  }

  .input-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 22px;
    width: 100%;

    input {
      width: 100%;
      height: 45px;
      background: #E7E7E7;
      border-radius: 8px;
      padding-left: 18px;

      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;

      color: #A954FD;

      ::placeholder {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;

        color: rgba(169, 84, 253, 0.56);
      }
    }
  }

  .submit-box {
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;

    button {
      background: #A954FD;
      border-radius: 9px;
      padding: 5px 19px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;

      color: #FFFFFF;
    }
  }

  .link {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
  }
`
