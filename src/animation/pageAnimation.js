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
    transition: { when: "beforeChildren", duration: 0.8 },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: { duration: 0.8 },
  },
}
export const mainPageAnimationLogged = {
  hidden: { opacity: 0, x: 500 },
  show: {
    opacity: 1,
    x: 0,
    transition: { when: "beforeChildren", duration: 0.8 },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: { duration: 0.8 },
  },
}

export const planta = {
  hidden: {},
  show: {
    // stroke: "rgba(11, 105, 24, 0.7)",
    stroke: ["#b4b4b4", "#b4b4b4", "#b4b4b4", "#cacaca"],
    pathLength: [0, 1, 1],
    fill: ["#b4b4b4", "#b4b4b4", "#b4b4b4", "#cacaca"],
    fillOpacity: [0, 0, 1, 1],
    opacity: [1, 1, 1, 1],
    transition: {
      // repeatType: "mirror",
      // repeat: "Infinity",
      duration: 6,
      delay: 0.5,
    },
  },
  exit: { pathLength: 0, transition: { duration: 0.5 } },
}

// export const plantaOuter = {
//   hidden: { pathLength: 0, opacity: 0, fill: "rgba(11, 105, 24, 0.478)" },
//   show: {
//     pathLength: 1,
//     opacity: 1,
//     fill: "rgba(11, 105, 24, 0.7)",
//     // fill: "black",
//     transition: { duration: 1, delay: 3 },
//   },
//   exit: { pathLength: 0, transition: { duration: 0.5 } },
// }
//------------------
// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }

// export const MyComponent = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
//       <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
//       <Items />
//     </motion.nav>
//   )
// }
//-----------------
