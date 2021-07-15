import React, { useState } from "react"
import { mainPageAnimation } from "../animation/animation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { BigCircle } from "../components/BigCircle"
// import axios from "axios"

export const Main = ({ isLogged, setIsLogged, data }) => {
  function logOutHandler() {
    setIsClicked(!isClicked)
  }

  const confirmLogOut = () => {
    localStorage.clear()
    setIsLogged(false)
  }
  const username = data.data !== undefined && data.data.user.first_name

  const variants = {
    clicked: { y: -50 },
    notClicked: { y: 0 },
  }

  const [isClicked, setIsClicked] = useState(false)

  return !isLogged ? (
    <MainStyled
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <BigCircle />

      <ContainerStyled className="container">
        <header className="main-header">welcome, shopper</header>
      </ContainerStyled>
    </MainStyled>
  ) : (
    <>
      <MainStyled
        variants={mainPageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="Main"
      >
        <ContainerStyled className="container">
          <motion.header
            initial={"notClicked"}
            animate={isClicked ? "clicked" : "notClicked"}
            variants={variants}
            className="main-header"
          >
            {!isClicked ? `this is your account, ${username}` : `logout`}
          </motion.header>
          {isClicked && (
            <motion.div
              initial={"notClicked"}
              animate={isClicked ? "clicked" : "notClicked"}
              variants={variants}
            >
              <button onClick={confirmLogOut}>Confirm</button>
              <button onClick={() => setIsClicked(!isClicked)}>Cancel</button>
            </motion.div>
          )}
        </ContainerStyled>
      </MainStyled>
      <div>
        <LogOutStyled onClick={logOutHandler} className="log-out">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </LogOutStyled>
      </div>
    </>
  )
}

const MainStyled = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #eebbc3; */
`

const ContainerStyled = styled(motion.div)`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    height: 7vh;
    width: 25vh;
    font-size: 4vh;
    margin: 1rem;
    margin-top: 5rem;
    transition: 500ms;
    &:hover {
      background-color: var(--one);
      color: var(--three);
    }
  }
`

const LogOutStyled = styled(motion.i)`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  font-size: 2.5rem;
  transition: 400ms;
  &:hover {
    cursor: pointer;
    color: var(--three);
  }
`
