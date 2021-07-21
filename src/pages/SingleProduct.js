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
  /* background-color: greenyellow; */
  background: linear-gradient(45deg, var(--four) 0%, var(--bg) 100%);

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
    p {
      max-height: 300px;
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      margin: 1rem 0;
      overflow: scroll;
    }
    h3 {
      height: 2rem;
      overflow: hidden;
      font-size: 1.6rem;
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
`

// const headerAnim = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { duration: 2 } },
// }

// const itemContainer = {
//   hidden: { x: 300 },
//   show: {
//     x: 0,
//     transition: { duration: 1, staggerChildren: 1, when: "afterChildren" },
//   },
// }
