import React from "react"
import { pageAnimation } from "../animation/animation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Redirect } from "react-router-dom"
import { useForm } from "../helpers/useForm"
import { signupHandler } from "../helpers/submitHandler"

export const Signup = ({ isLogged, setIsLogged, setUserData }) => {
  const emptyForm = {
    first_name: "",
    last_name: "",
    birth_date: "",
    gender: "",
    email: "",
    password: "",
  }

  const { form, onChangeHandler } = useForm(emptyForm)

  // function formPrevent(e) {
  //   e.preventDefault()
  // }

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
      <form
        //  onSubmit={formPrevent}
        className="signup-form"
      >
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
          <option value="M">M</option>
          <option value="F">F</option>
        </select>
        <input
          onChange={onChangeHandler}
          value={form.birthdate}
          name="birth_date"
          type="text"
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
        <button
          type="button"
          className="login-btn"
          onClick={() =>
            signupHandler(form, "signup", setIsLogged, setUserData)
          }
        >
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
