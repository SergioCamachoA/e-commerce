import React, { useEffect, useState, useContext } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { BigCircle } from "../components/BigCircle"
import { useLocation } from "react-router-dom"
import { GlobalContext } from "../hooks/useGlobal"
import { Loader } from "../components/Loader"

export const Main = () => {
  let location = useLocation()

  const { isLogged, setIsLogged, userData, setHistory } =
    useContext(GlobalContext)

  const [isLoading, setIsLoading] = useState(true)

  //save location pathname in a state to be used in redirection after auth on login
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  //animation properties
  const variants = {
    clicked: { y: -50 },
    notClicked: { y: 0 },
  }

  function logOutHandler() {
    setIsClicked(!isClicked)
  }

  const confirmLogOut = () => {
    localStorage.clear()
    setIsLogged(false)
  }

  const [username, setUsername] = useState()
  useEffect(() => {
    if (userData.first_name !== undefined) {
      setIsLoading(false)
      setUsername(userData.first_name)
    }
  }, [userData])

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
  ) : isLoading ? (
    <Loader />
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
            {!isClicked ? `happy shopping, ${username}` : `logout`}
          </motion.header>
          {isClicked && (
            <motion.div
              initial={"notClicked"}
              animate={isClicked ? "clicked" : "notClicked"}
              variants={variants}
            >
              <button onClick={confirmLogOut}>confirm</button>
              <button onClick={() => setIsClicked(!isClicked)}>
                keep shopping
              </button>
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
    /* width: 25vh; */
    padding: 0rem 1rem;
    font-size: 4vh;
    margin: 1rem;
    margin-top: 5rem;
    transition: 500ms;
    background-color: transparent;
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
