import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"

export const Products = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>all products</header>
    </motion.div>
  )
}
