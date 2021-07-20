import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/pageAnimation"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"

export const Products = () => {
  const { allProducts } = useGlobal()
  return (
    <ProductsStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>all products</header>
      <div>
        {allProducts.map((each) => {
          return (
            <Link to={`/product/${each._id}`} key={each._id}>
              <h2>{each.product_name}</h2>
              <img
                src={each.image === undefined ? planta : each.image}
                alt="item in stock"
              />
            </Link>
          )
        })}
      </div>
    </ProductsStyle>
  )
}

const ProductsStyle = styled(motion.div)`
  /* background-color: greenyellow; */
  position: relative;
  left: 5vw;
  text-align: center;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  width: 80vw;
  height: 100vh;
  /* svg {
    transform: rotate(90deg);
  } */
  a {
    display: flex;
    /* width: 500px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--one);
    font-size: 2rem;
    transition: 500ms;
    /* background-color: greenyellow; */
    width: 15vw;
    height: 25vw;
    margin: 1rem; /* border-radius: 0 2rem 2rem 0; */
    i,
    h2 {
      margin: 0 1rem 0 2rem;
      /* min-width: 40px; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3vh;
    }
    h2 {
      /* justify-content: left; */
      /* align-items: flex-start; */
      /* min-width: 300px; */
      /* margin: 0 0 0 1rem; */
      /* text-align: left; */
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 15vw;
      border-radius: 50%;
      border: 4px solid var(--one);

      transition: 500ms;
      &:hover {
        border-radius: 1rem;
      }
    }
  }
`
