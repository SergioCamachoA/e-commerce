import React, { useContext } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { BigCircle } from "../components/BigCircle"
import { GlobalContext } from "../hooks/useGlobal"
// import { Redirect } from "react-router-dom"
import { Home } from "./Home"

export const Main = () => {
  const { isLogged } = useContext(GlobalContext)

  return !isLogged ? (
    <MainStyled
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <BigCircle className="circle" />
      <div className="container">
        <header>welcome, shopper</header>
      </div>
    </MainStyled>
  ) : (
    <Home />
  )
}

const MainStyled = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    header {
      font-size: 2rem;
    }
  }
`
