import React from "react"
import { pageAnimation } from "../animation/animation"
import { motion } from "framer-motion"

export const Signup = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Signup"
    >
      <header>signup</header>
      <form className="signup-form">
        <input type="text" className="name" placeholder="name" />
        <input type="text" className="user" placeholder="username" />
        <input type="email" className="email" placeholder="email" />
        <input type="password" className="password" placeholder="password" />
      </form>
    </motion.div>
  )
}
