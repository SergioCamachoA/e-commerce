import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/pageAnimation"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { useGlobal } from "../hooks/useGlobal"
import { useForm } from "../hooks/useForm"

export const NewProduct = () => {
  const { isAdmin } = useGlobal()

  const emptyItem = {
    isActive: true,
    product_name: "",
    description: "",
    price: "",
    brand: "",
    sku: Math.floor(Math.random() * 10000000),
    image: "",
  }
  const { form, setForm, onChangeHandler } = useForm(emptyItem)

  let inputs = ["product_name", "description", "price", "brand", "image"]

  const newItemHandler = () => {
    const token = localStorage.getItem("token")

    let body = form

    if (token !== null) {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }

      axios
        .post("item", body, config)
        .then((res) => {
          console.log(res)
          setForm(emptyItem)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }

  return !isAdmin ? (
    <Redirect to="/home" />
  ) : (
    <SignupStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>add a new product</header>
      <form onSubmit={(e) => e.preventDefault()} className="signup-form">
        {inputs.map((each, index) => {
          let placeholder =
            each === "product_name"
              ? "product name"
              : each === "image"
              ? "image URL"
              : each
          return (
            <input
              name={each}
              key={index}
              type="text"
              onChange={onChangeHandler}
              value={form[each]}
              placeholder={placeholder}
            />
          )
        })}
        <button onClick={newItemHandler}>confirm</button>
      </form>
    </SignupStyled>
  )
}

const SignupStyled = styled(motion.div)`
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
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
