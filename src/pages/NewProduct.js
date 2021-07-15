import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import { Redirect } from "react-router-dom"
// import axios from "axios"
import styled from "styled-components"
// import { useAuth } from "../helpers/useAuth"

export const NewProduct = ({ isLogged }) => {
  let inputs = [
    "isActive",
    "product_name",
    "description",
    "price",
    "category",
    "brand",
    "sku",
    "image",
  ]

  const newItemHandler = () => {
    console.log("ahorita no joven")
    // const token = localStorage.getItem("token")

    // let body = inputs

    // if (token !== null) {
    //   const config = {
    //     headers: {
    //       Authorization: `JWT ${token}`,
    //     },
    //   }

    //   axios.post("item", body, config).then(
    //     (res) => {
    //       console.log()
    //     },
    //     (err) => {
    //       console.log(config)
    //       console.log(body)
    //       console.log("bailo berta")
    //     }
    //   )
    // }
  }

  return !isLogged ? (
    <Redirect to="./login" />
  ) : (
    <SignupStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>add a new product</header>
      <form className="signup-form">
        {inputs.map((each) => {
          return <input type="text" placeholder={each} />
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
