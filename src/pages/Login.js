import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import { useForm } from "../helpers/useForm"
import { submitHandler } from "../helpers/submitHandler"

export const Login = ({ isLogged, setIsLogged }) => {
  const emptyForm = {
    email: "",
    password: "",
  }

  const { form, onChangeHandler } = useForm(emptyForm)

  return !isLogged ? (
    <LoginStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Login"
    >
      <header>login</header>
      <form className="login-form">
        <input
          onChange={onChangeHandler}
          value={form.email}
          type="email"
          name="email"
          className="email"
          placeholder="email"
        />
        <input
          onChange={onChangeHandler}
          value={form.password}
          type="password"
          name="password"
          className="password"
          placeholder="password"
        />
        <button
          type="button"
          className="login-btn"
          onClick={() => submitHandler(form, setIsLogged, "login")}
        >
          Confirm
        </button>
      </form>
    </LoginStyled>
  ) : (
    <Redirect to="/" />
  )
}

const LoginStyled = styled(motion.div)`
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  select,
  button {
    min-height: 2rem;
    height: 4vh;
    min-width: 16rem;
    width: 20vw;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    /* color: $color-five; */
    border: none;
    background-color: var(--bg);
    transition: 400ms;
    &:hover {
      background-color: var(--three);
      color: var(--one);
    }
  }
  option {
    text-align: center;
  }
  button {
    background-color: var(--one);
    color: var(--three);
  }

  input:focus,
  select:focus {
    outline: none;
    background-color: var(--three);
  }
`
