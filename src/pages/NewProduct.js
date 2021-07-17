// import React, { useEffect } from "react"
// import { motion } from "framer-motion"
// import { pageAnimation } from "../animation/pageAnimation"
// import { Redirect, useLocation } from "react-router-dom"
// import axios from "axios"
// import styled from "styled-components"
// import { useGlobal } from "../hooks/useGlobal"

import React from "react"

export const NewProduct = () => {
  return (
    <div>
      <header>ahorita no, joven</header>
    </div>
  )
}

// export const NewProduct = () => {
//   const { isAdmin, isLogged, setHistory } = useGlobal()

//   let location = useLocation()

//   useEffect(() => {
//     setHistory(location.pathname)
//   }, [location, setHistory])

//   let inputs =
//     // [
//     //   "isActive",
//     //   "product_name",
//     //   "description",
//     //   "price",
//     //   "category",
//     //   "brand",
//     //   "sku",
//     //   "image",
//     // ]

//     {
//       isActive: false,
//       product_name: "tacospastor",
//       description: "Bonitos tacos 2",
//       price: 162,
//       category: "Women",
//       brand: "taqueshi",
//       sku: "e9cbfdb4-890a-42c3-a12c",
//       image:
//         "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
//     }

//   const newItemHandler = () => {
//     const token = localStorage.getItem("token")

//     let body = inputs

//     if (token !== null) {
//       const config = {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       }

//       axios.post("item", body, config).then(
//         (res) => {
//           console.log(res)
//         },
//         (err) => {
//           console.log(err)
//         }
//       )
//     }
//   }

//   return !isLogged ? (
//     <Redirect to="/login" />
//   ) : !isAdmin ? (
//     <Redirect to="/" />
//   ) : (
//     <SignupStyled
//       exit="exit"
//       variants={pageAnimation}
//       initial="hidden"
//       animate="show"
//       className="Products"
//     >
//       <header>add a new product</header>
//       <form onSubmit={(e) => e.preventDefault()} className="signup-form">
//         {inputs.map((each, index) => {
//           return <input key={index} type="text" placeholder={each} />
//         })}
//         <button onClick={newItemHandler}>confirm</button>
//       </form>
//     </SignupStyled>
//   )
// }

// const SignupStyled = styled(motion.div)`
//   text-align: center;
//   form {
//     display: flex;
//     flex-direction: column;
//     /* justify-content: center; */
//     align-items: center;
//   }
//   input,
//   select,
//   button {
//     min-height: 2rem;
//     height: 4vh;
//     min-width: 16rem;
//     width: 20vw;
//     margin-top: 1rem;
//     padding-left: 1rem;
//     font-size: 1.5rem;
//     border: none;
//     background-color: var(--bg);
//     transition: 400ms;
//     &:hover {
//       background-color: var(--three);
//       color: var(--one);
//     }
//   }
//   /* option {
//     text-align: left;
//   } */
//   button {
//     background-color: var(--one);
//     color: var(--three);
//   }

//   input:focus,
//   select:focus {
//     outline: none;
//     background-color: var(--three);
//   }
// `
