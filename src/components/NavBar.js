import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  faArrowLeft,
  // faBars,
  faSearch,
  faUserCircle,
  // faTimes,
  faPlus,
  faFingerprint,
  faTags,
} from "@fortawesome/free-solid-svg-icons"

const back = <FontAwesomeIcon icon={faArrowLeft} />
const search = <FontAwesomeIcon icon={faSearch} />
const newUser = <FontAwesomeIcon icon={faUserCircle} />
const user = <FontAwesomeIcon icon={faFingerprint} />
const all = <FontAwesomeIcon icon={faTags} />
const add = <FontAwesomeIcon icon={faPlus} />
// const hamburger = <FontAwesomeIcon icon={faBars} />
// const close = <FontAwesomeIcon icon={faTimes} />

export const NavBar = ({ isLogged }) => {
  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <NavStyle className="navbar">
      <div className="hovered">
        <Link to="/">
          <i>{back}</i>
          <h2>home</h2>
        </Link>
      </div>
      <div className="hovered">
        <form onSubmit={submitHandler}>
          <i>{search}</i>
          <h2>search</h2>
        </form>
      </div>
      {!isLogged && (
        <div className="hovered">
          <Link to="/login">
            <i>{user}</i>
            <h2>login</h2>
          </Link>
        </div>
      )}
      {!isLogged && (
        <div className="hovered">
          <Link to="/signup">
            <i>{newUser}</i>
            <h2>signup</h2>
          </Link>
        </div>
      )}
      <div className="hovered">
        <Link to="/products">
          <i>{all}</i>
          <h2>all products</h2>
        </Link>
      </div>
      <div className="hovered">
        <Link to={"/add-new"}>
          <i>{add}</i>
          <h2>add new</h2>
        </Link>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled(motion.div)`
  /* background-color: black; */
  min-width: 100px;
  /* width: 50vw; */
  height: 100vh;
  position: fixed;
  z-index: 3;
  /* overflow: hidden; */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  .hovered {
    /* background-color: black; */
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 700ms;
    width: 10vh;
    min-width: 100px;
    border-radius: 0 2rem 2rem 0;
    &:hover {
      min-width: 330px;
      width: 20vw;
      a,
      form {
        color: var(--one);
        i {
          color: var(--four);
        }
      }
      /* background-color: rgba(35, 41, 70, 0.438); */
      background-color: var(--three);
    }
  }

  a,
  form {
    position: relative;
    z-index: 99;
    // background-color: greenyellow;
    display: flex;
    width: 500px;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    color: var(--one);
    font-size: 2rem;
    transition: 500ms;
    /* border-radius: 0 2rem 2rem 0; */
    i,
    h2 {
      margin: 0 1rem 0 2rem;
      min-width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5vh;
    }
    h2 {
      justify-content: left;
      align-items: flex-start;
      min-width: 300px;
      margin: 0 0 0 1rem;
      /* text-align: left; */
    }
  }
`
