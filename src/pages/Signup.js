import React from "react"
import { pageAnimation } from "../animation/animation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Redirect } from "react-router-dom"

export const Signup = ({ isLogged, setIsLogged }) => {
  function loginHandler(e) {
    e.preventDefault()
    console.log("loggin in")
    setIsLogged(true)
  }
  return isLogged ? (
    <Redirect to="/" />
  ) : (
    <SignupStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Signup"
    >
      <header>signup</header>
      <form className="signup-form">
        <input type="text" className="name" placeholder="name" />
        <input type="text" className="user" placeholder="last name" />
        <select name="gender" id="gender">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="date" className="user" placeholder="birthdate" />
        <input type="email" className="email" placeholder="email" />
        <input type="password" className="password" placeholder="password" />
        <button className="login-btn" onClick={loginHandler}>
          Confirm
        </button>
      </form>
    </SignupStyled>
  )
}

const SignupStyled = styled(motion.div)`
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
  }
  .user,
  .name,
  .email,
  .password,
  select,
  .login-btn {
    min-height: 2rem;
    height: 4vh;
    min-width: 16rem;
    width: 20vw;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: $color-five;
    border: none;
    //   background-color: $color-four;
  }
  option {
    text-align: center;
  }
  input:focus,
  select:focus {
    outline: none;
    background-color: $color-two;
  }
`
