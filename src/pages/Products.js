import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Products = () => {
  return (
    <ProductsStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>all products</header>
      <Link to="/product/example">
        <h2>example product</h2>
      </Link>
    </ProductsStyle>
  )
}

const ProductsStyle = styled(motion.div)`
  a {
    // background-color: greenyellow;
    display: flex;
    /* width: 500px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--one);
    font-size: 2rem;
    transition: 500ms;
    /* border-radius: 0 2rem 2rem 0; */
    i,
    h2 {
      margin: 0 1rem 0 2rem;
      min-width: 40px;
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
