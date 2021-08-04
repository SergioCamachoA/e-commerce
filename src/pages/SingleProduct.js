import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/pageAnimation"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"
export const SingleProduct = () => {
  const { id } = useParams()
  const [item, setItem] = useState({
    product_name: "",
    image: "",
    price: "",
    descrption: "",
  })
  const { cartNewItem, allProducts } = useGlobal()

  useEffect(() => {
    if (allProducts.length !== 0) {
      setItem(allProducts.find((el) => el._id === id))
    }
  }, [allProducts, id, setItem])

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Item"
    >
      <ItemStyled className="content">
        <img
          src={item.image === undefined ? planta : item.image}
          alt="product"
        />
        <div>
          <header>{item.product_name}</header>
          <h3>{`$${item.price}`}</h3>
          <p>{item.description}</p>
          <button onClick={() => cartNewItem(id)}>Add to cart</button>
        </div>
      </ItemStyled>
    </motion.div>
  )
}

//styled component
const ItemStyled = styled.div`
  height: 60vh;
  padding: 2rem;
  /* border: 4px solid var(--one); */
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: right;
  background: linear-gradient(45deg, var(--four) 0%, var(--bg) 100%);
  /* background-color: greenyellow; */
  img {
    height: 40vh;
    transition: 800ms;
    border-radius: 1rem;
    margin: 1rem;
    border: 4px solid var(--one);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40vw;
    header {
      font-size: 2rem;
    }
    h3 {
      height: 2rem;
      overflow: hidden;
      font-size: 1.6rem;
    }
    p {
      max-height: 300px;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      margin: 1rem 0;
      overflow: scroll;
    }
    button {
      font-size: 1.6rem;
      padding: 0.5rem;
      transition: 500ms;
      &:hover {
        background-color: var(--one);
      }
    }
  }

  @media (max-width: 900px) {
    height: 550px;
    width: 350px;
    flex-direction: column;
    justify-content: flex-start;
    background: none;
    img {
      margin-top: 0;
      height: 200px;
    }
    div {
      min-width: 320px;
      header {
        /* background-color: red; */
        text-align: center;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 1.4rem;
      }
      p {
        height: 150px;
        text-align: left;
        font-size: 1.2rem;
      }
      button {
        overflow: hidden;
      }
    }
  }
`
