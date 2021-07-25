import { motion } from "framer-motion"
import styled from "styled-components"
import React from "react"

export const BigCircle = () => {
  return (
    <CircleSvg
      width="936"
      height="936"
      viewBox="0 0 636 636"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{
          pathLength: 0,
          strokeWidth: 7,
        }}
        animate={{
          pathLength: 1,
          strokeWidth: 7,
          transition: { duration: 0.9, delay: 0.5 },
        }}
        exit={{ pathLength: 0, transition: { duration: 0.5 } }}
        d="M7.99994 318C7.99994 489.208 146.792 628 318 628C489.208 628 628 489.208 628 318C628 146.792 489.208 8 318 8C146.792 8 7.99994 146.792 7.99994 318Z"
        stroke="#232946"
      />
    </CircleSvg>
  )
}

const CircleSvg = styled(motion.svg)`
  position: absolute;
  /* left: 0; */
  z-index: 1;
  height: 50vw;
  @media (max-width: 1084px) {
    height: 550px;
  }
  @media (max-width: 700px) {
    height: 350px;
  }
`
