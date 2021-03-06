import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useGlobal } from "../hooks/useGlobal"
// import { motion } from "framer-motion"

const cart = <FontAwesomeIcon icon={faShoppingCart} />

export const CartIcon = () => {
  const { cartCounter, setMenuActive } = useGlobal()
  return (
    <>
      <CartStyle onClick={() => setMenuActive(false)} to="/cart">
        {cart}
        {cartCounter !== 0 && <p className="counter">{cartCounter}</p>}
      </CartStyle>
    </>
  )
}

//styled component

const CartStyle = styled(Link)`
  /* background-color: greenyellow; */
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 3;
  color: var(--one);
  font-size: 2.5rem;
  transition: 400ms;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    color: var(--three);
  }
  p {
    overflow: hidden;
    background-color: #f84949;
    text-align: center;
    color: var(--bg);
    font-size: 1rem;
    border-radius: 50%;
    height: 1.2rem;
    width: 1.2rem;
    position: relative;
    bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 6; */
  }
`
