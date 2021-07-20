import React from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"

export const Cart = () => {
  //using useContext for global states
  const { isLogged, setHistory } = useGlobal()

  //submit handler for purchase to confirm login status and redirect ??
  const history = useHistory()

  //   if (isLogged) {
  //     history.push("/checkout")
  //   }
  function purchaseHandler() {
    if (!isLogged) {
      setHistory("/checkout")
      history.push("/login")
    } else {
      history.push("/checkout")
    }
  }

  return (
    <LoginStyled
      exit="exit"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
    >
      <header>READY TO BUY SHIT ????</header>

      <button onClick={purchaseHandler}>complete purchase</button>
    </LoginStyled>
  )
}

const LoginStyled = styled(motion.div)`
  background-color: greenyellow;
  background: linear-gradient(315deg, var(--four) 0%, var(--bg) 100%);

  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
