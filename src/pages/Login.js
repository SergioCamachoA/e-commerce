import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"

export const Login = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Login"
    >
      <header>login</header>
      <form className="login-form">
        <input type="text" className="user" placeholder="username" />
        <input type="password" className="password" placeholder="password" />
      </form>
    </motion.div>
  )
}
