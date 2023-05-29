import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { FC, ReactNode } from "react"


interface IProps {
  children: ReactNode[]
  OnSubmit: () => void
  title: string
  btnText: string
  linkText: string
  linkHref: string
  isPending: boolean
  error?: string
  isError?: boolean
}

export const Form: FC<IProps> = ({
                                   children,
                                   OnSubmit,
                                   btnText,
                                   linkText,
                                   title,
                                   linkHref,
                                   error,
                                   isError,
                                   isPending
                                 }) => {


  return <FormLayout isPending={isPending} isError={!!isError} autoComplete="off" onSubmit={OnSubmit}>

    <div className="title">
      <h2>{title}</h2>
    </div>
    <div className="input-box">
      {children}
    </div>
    <div className="submit-box">
      <button disabled={isPending} type="submit">{btnText}</button>
    </div>
    <NavLink to={"/" + linkHref} className="link">
      {linkText}
    </NavLink>
  </FormLayout>
}
const FormLayout = styled.form<{
  isError: boolean
  isPending: boolean
}>`

  width: 280px;
  min-height: 430px;
  background: var(--auth-form-bg-color);
  border-radius: 90px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 26px 29px;

  .title {
    margin-bottom: 56px;

    h2 {

      font-family: 'IBM Plex Sans Condensed', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 52px;
      /* identical to box height */
      color: var(--sub-text-color);
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

        color: ${({ isError }) => !isError ? "var(--placeholder-color)" : "red"};
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
      background: ${({
                       isError,
                       isPending
                     }) => isPending && "var(--auth-form-btn-color-clicked)" || isError && "red" || "var(--auth-form-btn-color)"};
      border-radius: 9px;
      padding: 5px 19px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;

      color: var(--sub-text-color);
    }
  }

  .link {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: var(--sub-text-color);
  }
`
