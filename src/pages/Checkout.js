import React, { useState } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useGlobal } from "../hooks/useGlobal"

export const Checkout = () => {
  const { setCartProducts, setCartCounter, newTotal, setNewTotal } = useGlobal()

  const [isPurchased, setIsPurchased] = useState(false)

  function purchaseHandler() {
    localStorage.removeItem("shoppingCart")
    setCartProducts([])
    setCartCounter(0)
    setNewTotal(0)
    setIsPurchased(true)
  }

  return (
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
