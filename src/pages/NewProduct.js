import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import { Redirect } from "react-router-dom"
// import { useAuth } from "../helpers/useAuth"

export const NewProduct = ({ isLogged }) => {
  // const { isLogged } = useAuth()
  return !isLogged ? (
    <Redirect to="./login" />
  ) : (
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
