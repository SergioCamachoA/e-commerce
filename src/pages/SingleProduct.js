import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"

export const SingleProduct = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    async function getItem() {
      const currentItem = await fetch(
        "https://ecomerce-master.herokuapp.com/api/v1/item/5fbc19a65a3f794d72471163"
      )
        .then((res) => res.json())
        .catch((err) => console.log(err))
      setItem(currentItem)
    }
    getItem()
  }, [id])

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Item"
    >
      <HeaderStyled>{id}</HeaderStyled>
      <ItemStyled className="content">
        <img src={item.image} alt="product" />
        <h3>{item.product_name}</h3>
        <h3>{item.description}</h3>
        <h3>{`$${item.price}`}</h3>
      </ItemStyled>
    </motion.div>
  )
}
//styled component
const HeaderStyled = styled(motion.header)`
  text-align: center;
`

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 200px;
    border-radius: 50%;
    transition: 800ms;
    &:hover {
      border-radius: 1rem;
    }
  }
  h3 {
    max-width: 450px;
    height: 60px;
    overflow: hidden;
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
