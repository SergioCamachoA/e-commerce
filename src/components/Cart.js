import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

const cart = <FontAwesomeIcon color="#f5487f" icon={faShoppingCart} />
// const liked = <FontAwesomeIcon color="#f5487f" icon={faHeart} spin />

export const Cart = () => {
  return (
    <CartStyle>
      {/* <Link>
        <i>{liked}</i>
      </Link> */}
      <Link>
        <i>{cart}</i>
      </Link>
    </CartStyle>
  )
}

//styled component

const CartStyle = styled(motion.div)`
  position: absolute;
  top: 5%;
  right: 5%;
  i {
    font-size: 35px;
    margin-left: 1vw;
  }
`
