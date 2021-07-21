import React, { useEffect, useState } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Redirect, useHistory, useLocation } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"

export const Checkout = () => {
  //using useContext for global states
  const { isLogged, setHistory } = useGlobal()
  const [isPurchased, setIsPurchased] = useState(false)

  let location = useLocation()
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  //submit handler for purchase to confirm login status and redirect ??
  const history = useHistory()
  function purchaseHandler() {
    let path = "/login"
    if (!isLogged) {
      history.push(path)
    } else {
      setIsPurchased(true)
    }
  }

  return isLogged ? (
    <StyledCheckout
      exit="exit"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
    >
      {isPurchased ? (
        <header>thank you !</header>
      ) : (
        <>
          <header>BUY SHIT NOW</header>
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

  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
