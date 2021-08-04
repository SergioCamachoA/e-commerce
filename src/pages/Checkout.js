import React, { useEffect, useState } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Redirect, useLocation } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"

export const Checkout = () => {
  //using useContext for global states
  const {
    isLogged,
    setHistory,
    setCartProducts,
    setCartCounter,
    newTotal,
    setNewTotal,
  } = useGlobal()
  const [isPurchased, setIsPurchased] = useState(false)

  let location = useLocation()
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  //submit handler for purchase to confirm login status and redirect ??
  // const history = useHistory()

  function purchaseHandler() {
    localStorage.removeItem("shoppingCart")
    setCartProducts([])
    setCartCounter(0)
    setNewTotal(0)
    setIsPurchased(true)
  }

  return isLogged ? (
    <StyledCheckout
      exit="exit"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
    >
      {isPurchased ? (
        <header>thanks!</header>
      ) : (
        <>
          <header>total due</header>
          <header>$ {newTotal}</header>
          <button onClick={purchaseHandler}>complete purchase</button>
        </>
      )}
    </StyledCheckout>
  ) : (
    <Redirect to="/login" />
  )
}

const StyledCheckout = styled(motion.div)`
  background-color: greenyellow;
  background: linear-gradient(315deg, var(--four) 0%, var(--bg) 100%);
  border-radius: 2rem;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  header {
    font-size: 3rem;
  }
  button {
    /* height: 3rem; */
    margin-top: 3rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    transition: 500ms;
    &:hover {
      background-color: var(--one);
      color: var(--four);
    }
  }
`
