import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { Redirect, useHistory } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useAuth } from "../hooks/useAuth"
import { Loader } from "../components/Loader"
import { useGlobal } from "../hooks/useGlobal"

export const Login = () => {
  const emptyForm = {
    email: "",
    password: "",
  }

  const pathHistory = useHistory()

  const { isLogged, history } = useGlobal()
  const { logInHandler } = useAuth()

  const { form, onChangeHandler } = useForm(emptyForm)
  const [isLoading, setIsLoading] = useState(false)

  const loginAnim = () => {
    setIsLoading(true)
    logInHandler(form, "login")
  }

  // const [current, setCurrent] = useState("/")

  useEffect(() => {
    isLogged && setIsLoading(false)
  }, [isLogged])

  //redirects to previous pathname (currently set up only in Settings.js)
  //if pathname undefined returns to homepage '/'
  if (isLogged) {
    return (
      <Redirect
        to={
          pathHistory.goBack() !== undefined
            ? pathHistory.goBack()
            : history === undefined
            ? "/"
            : history
        }
      />
    )
    // return <Redirect to={history === undefined ? "/" : history} />
  }

  return !isLoading ? (
    <LoginStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Login"
    >
      <motion.div className="anim-container">
        <motion.header>login</motion.header>
      </motion.div>
      <form className="login-form">
        <motion.div className="header-container">
          <motion.input
            onChange={onChangeHandler}
            value={form.email}
            type="email"
            name="email"
            placeholder="email"
          />
        </motion.div>

        <motion.div className="header-container">
          <motion.input
            onChange={onChangeHandler}
            value={form.password}
            type="password"
            name="password"
            placeholder="password"
          />
        </motion.div>

        <motion.div className="header-container">
          <motion.button
            type="button"
            className="login-btn"
            onClick={loginAnim}
          >
            Confirm
          </motion.button>
        </motion.div>
      </form>
    </LoginStyled>
  ) : (
    <Loader />
  )
}

const LoginStyled = styled(motion.div)`
  text-align: center;
  .anim-container {
    overflow: hidden;
    /* background-color: greenyellow; */
  }
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
