import React from "react"
import { useParams } from "react-router-dom"
// import styled from "styled-components"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"

export const SingleProduct = () => {
  const { id } = useParams()

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Item"
    >
      <motion.header>
        {/* <motion.header variants={headerAnim} animate="show" initial="hidden"> */}
        {id}
      </motion.header>
    </motion.div>
  )
}
//styled component

// const Item = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 5rem, 10rem;
//   color: whitesmoke;
//   background-color: greenyellow;
// `

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
