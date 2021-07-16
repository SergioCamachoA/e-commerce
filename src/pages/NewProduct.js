import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import { Redirect } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
// import { useAuth } from "../helpers/useAuth"
import { useGlobal } from "../hooks/useGlobal"

export const NewProduct = () => {
  const { isLogged } = useGlobal()

  let inputs =
    // [
    //   "isActive",
    //   "product_name",
    //   "description",
    //   "price",
    //   "category",
    //   "brand",
    //   "sku",
    //   "image",
    // ]

    {
      isActive: true,
      product_name: "tacos al pastor",
      description:
        "Bonitos tacos No Yaiba Aretes De Sol Kamado Tanjiro Demon Slayer 2",
      price: 90962,
      category: "Women",
      brand: "Hatori Hanso",
      sku: "e9cbfdb4-890a-42c3-b94a-687a39dc7ed1",
      image:
        "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
    }

  const newItemHandler = () => {
    const token = localStorage.getItem("token")

    let body = inputs

    if (token !== null) {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }

      axios.post("item", body, config).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(config)
          console.log(body)
          console.log("bailo berta")
        }
      )
    }
  }

  const isAdmin = false

  return !isLogged ? (
    <Redirect to="/login" />
  ) : !isAdmin ? (
    <Redirect to="/" />
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
        {/* {inputs.map((each, index) => {
          return <input key={index} type="text" placeholder={each} />
        })} */}
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
