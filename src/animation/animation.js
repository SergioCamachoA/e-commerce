// import { motion } from "framer-motion"

export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: { duration: 0.5 },
  },
}

export const mainPageAnimation = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: { duration: 0.8 },
  },
}
