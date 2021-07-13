import React from "react"
// import { useParams } from "react-router-dom"
import { mainPageAnimation } from "../animation/animation"
import { motion } from "framer-motion"

export const Main = () => {
  return (
    <motion.div
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <div className="container">
        <header className="main-header">welcome, shoper</header>
      </div>
      <div className="circle"></div>
      <div className="circle-two"></div>
    </motion.div>
  )
}
