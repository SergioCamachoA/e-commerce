import React from "react"
import { motion } from "framer-motion"
import { pageAnimation } from "../animation/animation"
import { Redirect } from "react-router-dom"
import axios from "axios"
// import { useAuth } from "../helpers/useAuth"

export const NewProduct = ({ isLogged }) => {
  const product = {
    isActive: true,
    product_name: "Aretes Jorete Kamado",
    description:
      "Bonitos Aretes Kimetsu No Yaiba Aretes De Sol Kamado Tanjiro Demon Slayer 2",
    price: 18000,
    category: "Women",
    brand: "Hatori Hanso",
    sku: "e9cbfac1-301a-42c3-b94a-311a39dc7ed1",
    image:
      "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
  }

  const newItemHandler = () => {
    const token = localStorage.getItem("token")

    let body = product

    if (token !== null) {
      const config = {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }

      axios.post("item", body, config).then(
        (res) => {
          console.log()
        },
        (err) => {
          console.log(config)
          console.log(body)
          console.log("bailo berta")
        }
      )
    }
  }

  return !isLogged ? (
    <Redirect to="./login" />
  ) : (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      <header>add a new product</header>
      <button onClick={newItemHandler}>Add it now</button>
    </motion.div>
  )
}
