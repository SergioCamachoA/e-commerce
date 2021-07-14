import React, { useState } from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import { useForm } from "../helpers/useForm"
import { logInHandler } from "../helpers/submitHandler"

export const Login = ({ isLogged, setIsLogged, setUserData }) => {
  const emptyForm = {
    email: "",
    password: "",
  }
  const { form, onChangeHandler } = useForm(emptyForm)

  const [isClicked, setIsClicked] = useState(false)

  const variants = {
    clicked: { y: 100, transition: { duration: 0.5 } },
    notClicked: { y: 0 },
  }

  const loginAnim = () => {
    setIsClicked(true)
    setTimeout(() => {
      logInHandler(form, "login", setIsLogged, setUserData)
    }, 500)
  }

  return !isLogged ? (
    <LoginStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Login"
    >
      <motion.div className="anim-container">
        <motion.header
          variants={variants}
          initial={"notClicked"}
          animate={isClicked ? "clicked" : "notClicked"}
        >
          login
        </motion.header>
      </motion.div>
      <form className="login-form">
        <motion.div className="header-container">
          <motion.input
            variants={variants}
            initial={"notClicked"}
            animate={isClicked ? "clicked" : "notClicked"}
            onChange={onChangeHandler}
            value={form.email}
            type="email"
            name="email"
            className="email"
            placeholder="email"
          />
        </motion.div>

        <motion.div className="header-container">
          <motion.input
            variants={variants}
            initial={"notClicked"}
            animate={isClicked ? "clicked" : "notClicked"}
            onChange={onChangeHandler}
            value={form.password}
            type="password"
            name="password"
            className="password"
            placeholder="password"
          />
        </motion.div>

        <motion.div className="header-container">
          <motion.button
            variants={variants}
            initial={"notClicked"}
            animate={isClicked ? "clicked" : "notClicked"}
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
    <Redirect to="/" />
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
