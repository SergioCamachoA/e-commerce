import React, { useEffect, useState, useContext } from "react"
import { mainPageAnimationLogged } from "../animation/pageAnimation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { GlobalContext } from "../hooks/useGlobal"
// import { Loader } from "../components/Loader"
import { useWindowSize } from "../hooks/useWindowSize"
import { Offers } from "../components/Offers"
// import { Redirect } from "react-router-dom"

export const Home = () => {
  const { setIsLogged, userData } = useContext(GlobalContext)

  //   const [isLoading, setIsLoading] = useState(true)

  //animation properties
  const variants = {
    clicked: { y: -150 },
    notClicked: { y: 0 },
  }

  function logOutHandler() {
    setIsClicked(!isClicked)
  }

  const confirmLogOut = () => {
    localStorage.removeItem("token")
    setIsLogged(false)
  }

  const [username, setUsername] = useState()
  useEffect(() => {
    if (userData.first_name !== undefined) {
      //   setIsLoading(false)
      setUsername(userData.first_name)
    }
  }, [userData])

  const [isClicked, setIsClicked] = useState(false)

  const size = useWindowSize()

  return (
    <MainStyled
      variants={mainPageAnimationLogged}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main-in"
    >
      <ContainerStyled>
        <header className="main-header">
          {!isClicked ? `happy shopping, ${username}` : `logout`}
        </header>
        {(window.innerWidth > 1084 || size > 1084 || !isClicked) && <Offers />}

        {isClicked && (
          <motion.div
            className="log-div"
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
      <LogOutStyled onClick={logOutHandler} className="log-out">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogOutStyled>
    </MainStyled>
  )
}

//STYLED COMPONENTS -----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

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

const ContainerStyled = styled(motion.div)`
  position: relative;
  z-index: 2;
  min-height: 50vh;
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  overflow: visible;
  .log-div {
    /* background-color: red; */
    /* text-align: center; */
    /* overflow-x: visible; */
    position: absolute;
    right: 1rem;
    bottom: 0;
  }
  .main-header {
    /* background-color: greenyellow; */
    text-align: right;
    position: relative;
    width: 42%;
    left: 10%;
    /* bottom: 14vw; */
  }
  button {
    /* position: relative; */
    /* left: 7vw; */
    height: 7vh;
    /* width: 25vh; */
    padding: 0rem 1rem;
    font-size: 4vh;
    margin: 1rem;
    /* margin-top: 5rem; */
    transition: 500ms;
    background-color: transparent;
    &:hover {
      background-color: var(--one);
      color: var(--three);
    }
  }

  @media (max-width: 1084px) {
    flex-direction: column;
    .log-div {
      width: 80%;
      text-align: center;
      /* overflow-x: visible; */
      position: absolute;
      /* right: 4rem; */
      bottom: 0;
    }
    .main-header {
      width: 80%;
      left: 0;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 600px) {
    .main-header {
      width: 80%;
      left: 0;
      text-align: right;
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .log-div {
      /* background-color: greenyellow; */
      width: 80%;
      text-align: right;
      /* overflow-x: visible; */
      position: absolute;
      /* right: 4rem; */
      bottom: 0;
      right: 2rem;
      button {
        margin: 0;
      }
    }
  }
`

const LogOutStyled = styled(motion.i)`
  position: absolute;
  z-index: 99;
  bottom: 1vh;
  right: 2vw;
  font-size: 2.5rem;
  transition: 400ms;
  color: var(--one);
  &:hover {
    cursor: pointer;
    color: var(--three);
  }
`
