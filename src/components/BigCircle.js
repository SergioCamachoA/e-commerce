import { motion } from "framer-motion"
import styled from "styled-components"
import React from "react"

export const BigCircle = () => {
  // let controls = useAnimation()
  return (
    <CircleSvg
      width="636"
      height="636"
      viewBox="0 0 636 636"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      //   initial={{ scale: 0.5, fill: "#b8c1ec" }}
      //   animate={{ scale: 3, fill: "#eebbc3" }}
      //   transition={{ duration: 2, delay: 2.5 }}
    >
      <motion.path
        // initial={{ pathLength: 0 }}
        initial={{
          pathLength: 0,
          strokeWidth: 7,
          //   fill: "#b8c1ec",
        }}
        // animate={{ pathLength: 1, width: 100 }}
        // animate={controls}

        animate={{
          pathLength: 1,
          //   pathLength: [0, 1, 1],
          //   strokeWidth: [5, 5, 5],
          strokeWidth: 7,
          //   fill: "#eebbc3",
          transition: { duration: 0.9, delay: 0.5 },
        }}
        exit={{ pathLength: 0, transition: { duration: 0.5 } }}
        // transition={{ duration: 1, delay: 0.5 }}
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
`
// export const SmallCircle = () => {
//   // let controls = useAnimation()
//   return (
//     <CircleSvg
//       width="636"
//       height="636"
//       viewBox="0 0 636 636"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       initial={{ scale: 0, fill: "#eebbc3" }}
//       animate={{ scale: 3, fill: "#b8c1ec" }}
//       transition={{ duration: 2, delay: 5 }}
//     >
//       <motion.path
//         // initial={{ pathLength: 0 }}
//         // initial={{
//         //   pathLength: 0,
//         //   strokeWidth: 7,
//         //   //   fill: "#b8c1ec",
//         // }}
//         // // animate={{ pathLength: 1, width: 100 }}
//         // // animate={controls}

//         // animate={{
//         //   pathLength: 1,
//         //   //   pathLength: [0, 1, 1],
//         //   //   strokeWidth: [5, 5, 5],
//         //   strokeWidth: 7,
//         //   //   fill: "#eebbc3",
//         // }}
//         // transition={{ duration: 1.5, delay: 0.5 }}
//         d="M7.99994 318C7.99994 489.208 146.792 628 318 628C489.208 628 628 489.208 628 318C628 146.792 489.208 8 318 8C146.792 8 7.99994 146.792 7.99994 318Z"
//         stroke="#eebbc3"
//       />
//     </CircleSvg>
//   )
// }
