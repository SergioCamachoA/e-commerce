import React from "react"
import { Link } from "react-router-dom"
import { pageAnimation } from "../animation/animation"
import { motion } from "framer-motion"

export const Main = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Main"
    >
      <div className="container">
        <header className="main-header">welcome, shoper</header>
        <ul>
          <li>
            <Link to="/login">log in</Link>
          </li>
          <li>
            <Link to="/signup">sign up</Link>
          </li>
          <li>
            <Link to="/products">all products</Link>
          </li>
          <li>
            <Link to="/product/example">example product</Link>
          </li>
          <li>
            <Link to="/add-new">new product</Link>
          </li>
        </ul>
      </div>
      <div className="circle"></div>
      <div className="circle-two"></div>
    </motion.div>
  )
}
