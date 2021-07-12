import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"

export const NewProduct = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>add a new product</header>
    </motion.div>
  )
}
