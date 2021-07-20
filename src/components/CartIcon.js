import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useGlobal } from "../hooks/useGlobal"
// import { motion } from "framer-motion"

const cart = <FontAwesomeIcon icon={faShoppingCart} />

export const CartIcon = () => {
  const { cartCounter } = useGlobal()
  return (
    <>
      <CartStyle to="/cart">
        {cart}
        {cartCounter !== 0 && <p className="counter">{cartCounter}</p>}
      </CartStyle>
    </>
  )
}

//styled component

const CartStyle = styled(Link)`
  /* background-color: greenyellow; */
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
  p {
    background-color: #f84949;
    text-align: center;
    color: var(--bg);
    font-size: 1.5rem;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    top: -4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 6; */
  }
`
