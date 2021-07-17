import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
// import { ReactComponent as Perame } from "../svg/perame.svg"

export const Loader = () => {
  return (
    <StyledLoader
      width="1146"
      height="702"
      viewBox="0 0 1146 702"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{
          pathLength: 1,
          transition: {
            duration: 0.7,
            repeatType: "mirror",
            repeat: "Infinity",
          },
        }}
        //   exit={{}}
        d="M560.999 147C-805.801 770.24 756.207 475.733 1014 147C1271.79 -181.732 1057.71 856.613 1014 533.001C970.287 209.388 724.879 -187.651 560.999 520.001C397.119 1227.65 1927.8 -476.239 560.999 147Z"
      />
    </StyledLoader>
  )
}

const StyledLoader = styled(motion.svg)`
  position: absolute;
  z-index: 1;
  /* right: 10vw; */
  top: 0;
  transform: scale(0.5);
  stroke-width: 9;
  stroke: var(--one);
`
