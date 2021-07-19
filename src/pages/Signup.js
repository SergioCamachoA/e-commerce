import React, { useEffect, useState } from "react"
import { pageAnimation } from "../animation/pageAnimation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useAuth } from "../hooks/useAuth"
import { Loader } from "../components/Loader"
import { useGlobal } from "../hooks/useGlobal"

export const Signup = () => {
  const emptyForm = {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    password: "",
    role: "ADMIN",
  }

  const { isLogged } = useGlobal()

  const { signupHandler } = useAuth()

  const { form, onChangeHandler } = useForm(emptyForm)

  const [isLoading, setIsLoading] = useState(false)

  const loginAnim = () => {
    setIsLoading(true)
    signupHandler(form, "signup", setIsLoading)
  }

  useEffect(() => {
    isLogged && setIsLoading(false)
  }, [isLogged])

  return !isLogged ? (
    !isLoading ? (
      <SignupStyled
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="Signup"
      >
        <header>signup</header>
        <form className="signup-form">
          <input
            onChange={onChangeHandler}
            value={form.name}
            type="text"
            name="first_name"
            className="name"
            placeholder="name"
          />
          <input
            onChange={onChangeHandler}
            value={form.lastName}
            type="text"
            name="last_name"
            className="last-name"
            placeholder="last name"
          />
          <select
            onChange={onChangeHandler}
            value={form.select}
            name="gender"
            id="gender"
          >
            <option value="gender">gender</option>
            <option value="X">other</option>
            <option value="M">male</option>
            <option value="F">female</option>
          </select>
          <input
            onChange={onChangeHandler}
            value={form.birthdate}
            name="birth_date"
            type="date"
            className="birthdate"
            placeholder="birthdate"
          />
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
          <button type="button" className="login-btn" onClick={loginAnim}>
            Confirm
          </button>
        </form>
      </SignupStyled>
    ) : (
      <Loader />
    )
  ) : (
    <Redirect to="/" />
  )
}

const SignupStyled = styled(motion.div)`
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
    padding-left: 1rem;
    font-size: 1.5rem;
    border: none;
    background-color: var(--bg);
    transition: 400ms;
    &:hover {
      background-color: var(--three);
      color: var(--one);
    }
  }
  /* option {
    text-align: left;
  } */
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
