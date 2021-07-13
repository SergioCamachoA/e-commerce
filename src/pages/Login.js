import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import styled from "styled-components"
import { Redirect } from "react-router-dom"

export const Login = ({ isLogged, setIsLogged }) => {
  function loginHandler(e) {
    e.preventDefault()
    console.log("loggin in")
    setIsLogged(true)
  }
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
        <input type="text" className="user" placeholder="username" />
        <input type="password" className="password" placeholder="password" />
        <button className="login-btn" onClick={loginHandler}>
          Confirm
        </button>
      </form>
    </LoginStyled>
  ) : (
    <Redirect to="/" />
  )
}

const LoginStyled = styled(motion.div)`
  header {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .user,
  .name,
  .email,
  .password,
  .login-btn {
    min-height: 2rem;
    height: 4vh;
    min-width: 16rem;
    width: 20vw;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: $color-five;
  }
  input::placeholder {
    color: $color-five;
  }
  input:focus,
  select:focus {
    outline: none;
    background-color: $color-two;
  }
`
