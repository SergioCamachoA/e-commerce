import React, { useEffect } from "react"
import { mainPageAnimation } from "../animation/animation"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

export const Main = ({ isLogged, setIsLogged }) => {
  useEffect(() => {
    const config = {
      header: {
        Authorization: `JWT ${JSON.parse(localStorage.getItem("token"))}`,
      },
    }
    console.log(config.header.Authorization)
    axios.get("use/me", config).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err, "valio gaver")
      }
    )
  })

  return !isLogged ? (
    <motion.div
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <div className="container">
        <header className="main-header">welcome, shoper</header>
      </div>
    </motion.div>
  ) : (
    <>
      <motion.div
        variants={mainPageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className="Main"
      >
        <div className="container">
          <header className="main-header">this is your account</header>
        </div>
      </motion.div>
      <div>
        <LogOutStyled onClick={() => setIsLogged(false)} className="log-out">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </LogOutStyled>
      </div>
    </>
  )
}

const LogOutStyled = styled.i`
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
