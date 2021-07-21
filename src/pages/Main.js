import React, { useEffect, useState, useContext } from "react"
import {
  // mainHeader,
  mainPageAnimation,
  mainPageAnimationLogged,
  mainProduct,
} from "../animation/pageAnimation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { BigCircle } from "../components/BigCircle"
import { Link, useLocation } from "react-router-dom"
import { GlobalContext } from "../hooks/useGlobal"
import { Loader } from "../components/Loader"
import planta from "../svg/planta4.svg"
import { Planta } from "../components/Planta"

export const Main = () => {
  let location = useLocation()

  const {
    isLogged,
    setIsLogged,
    userData,
    setHistory,
    allProducts,
    cartNewItem,
  } = useContext(GlobalContext)

  const [isLoading, setIsLoading] = useState(true)

  //save location pathname in a state to be used in redirection after auth on login
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  //animation properties
  const variants = {
    clicked: { y: 150 },
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
      setIsLoading(false)
      setUsername(userData.first_name)
    }
  }, [userData])

  const [isClicked, setIsClicked] = useState(false)
  const currentUndef = {
    image: { planta },
    price: "",
    product_name: "",
    _id: "",
  }

  const [current, setCurrent] = useState(currentUndef)
  const [fetchedProducts, setFetchedProducts] = useState(false)

  useEffect(() => {
    let productsArray = []

    function printCurrent() {
      let randomIndex = Math.floor(Math.random() * allProducts.length)
      // console.log(productsArray)
      if (productsArray.length !== 0) {
        setCurrent(productsArray[randomIndex])
        // setCurrent(productsArray.pop())
        setTimeout(() => {
          printCurrent()
        }, 4000)
      }
    }
    if (allProducts.length !== 0) {
      productsArray = allProducts.slice()
      printCurrent()
      setFetchedProducts(true)
    }

    //clean up to stop recursion on unmounting
    return () => {
      productsArray = []
    }
  }, [allProducts])

  return !isLogged ? (
    <MainStyled
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <Planta />
      <BigCircle />
      <ContainerStyled className="container">
        <HeaderStyled>welcome, shopper</HeaderStyled>
      </ContainerStyled>
    </MainStyled>
  ) : isLoading ? (
    <Loader />
  ) : (
    <MainStyled
      variants={mainPageAnimationLogged}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main-in"
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
        <ImageStyled
        // variants={mainProduct}
        // initial="hidden"
        // animate="show"
        // exit="exit"
        >
          {fetchedProducts && (
            <>
              <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 3 } }}
              >
                check these out
              </motion.header>
              <motion.div
                variants={mainProduct}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <Link to={current !== undefined && `product/${current._id}`}>
                  <img
                    src={current.image === undefined ? planta : current.image}
                    alt="item"
                  />
                  <h3>{current.product_name}</h3>
                  <h3>{`$${current.price}`}</h3>
                </Link>
                <button
                  className="add-btn"
                  onClick={() => cartNewItem(current._id)}
                >
                  Add to cart
                </button>
              </motion.div>
            </>
          )}
        </ImageStyled>

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
  /* background-color: var(--bg); */
`

const ContainerStyled = styled(motion.div)`
  position: relative;
  z-index: 2;
  min-height: 50vh;
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: greenyellow; */
  overflow: visible;
  .log-div {
    overflow-x: visible;
    /* background-color: greenyellow; */
    position: relative;
    left: 20vw;
    bottom: 12vw;
  }
  .main-header {
    text-align: right;
    position: relative;
    left: 15vw;
    bottom: 14vw;
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
`
const HeaderStyled = styled(motion.header)`
  position: absolute;
  /* opacity: 0; */
`
const ImageStyled = styled(motion.div)`
  /* opacity: 0; */
  text-align: center;
  position: absolute;
  z-index: 5;
  bottom: 0;
  left: 20vw;
  /* right: 25vw; */
  height: 30vw;
  width: 30vw;
  /* border: 6px solid var(--two); */
  background-color: rgba(202, 202, 202, 0.5);
  background: linear-gradient(45deg, var(--four) 0%, var(--bg) 100%);

  border-radius: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header {
    font-size: 2vw;
    margin-top: 0.5rem;
    color: var(--one);
  }
  a {
    font-size: 1.5vw;
    /* height: 70%; */
    margin-top: 2rem;
    text-decoration: none;
    color: var(--one);
    /* background-color: greenyellow; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 15vw;
    /* width: 40vh; */
    border-radius: 50%;
    transition: 500ms;
    border: 4px solid var(--one);

    /* filter: grayscale(50%); */
    &:hover {
      border-radius: 1rem;
      filter: grayscale(0%);
    }
  }
  .add-btn {
    font-size: 1.5vw;
    background-color: var(--three);
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
