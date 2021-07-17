import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
// import { motion } from "framer-motion"

const cart = <FontAwesomeIcon icon={faShoppingCart} />

export const Cart = () => {
  return (
    <Link to="/">
      <CartStyle>{cart}</CartStyle>
    </Link>
  )
}

//styled component

const CartStyle = styled.i`
  position: absolute;
  top: 2vh;
  right: 2vw;
  z-index: 3;
  color: var(--one);
  font-size: 2.5rem;
  transition: 400ms;

  &:hover {
    cursor: pointer;
    color: var(--three);
  }
`
