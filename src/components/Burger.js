import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { motion } from "framer-motion"
import React from "react"
import { useGlobal } from "../hooks/useGlobal"

const burger = <FontAwesomeIcon icon={faBars} />
const close = <FontAwesomeIcon icon={faTimes} />

export const Burger = () => {
  const { menuActive, setMenuActive } = useGlobal()

  return (
    <StyledBurger onClick={() => setMenuActive(!menuActive)} className="burger">
      {!menuActive ? burger : close}
    </StyledBurger>
  )
}

const StyledBurger = styled(motion.button)`
  position: fixed;
  color: var(--one);
  left: 1.7rem;
  top: 1rem;
  z-index: 9;
  height: 60px;
  width: 45px;
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  /* transition: 500ms; */
  background-color: transparent;

  @media (max-width: 700px) {
    font-size: 2.5rem;
    opacity: 1;
    pointer-events: auto;
    &:hover {
      color: var(--three);
    }
  }
`
