import axios from "axios"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { pageAnimation } from "../animation/animation"

export const Settings = (data) => {
  const [userId, setUserId] = useState("")
  //   console.log(data)
  const [input, setInput] = useState("")

  useEffect(() => {
    if (data.data.data !== undefined) {
      console.log(data.data.data)
      setUserId(data.data.data.user._id)
    }
  }, [data])

  const token = localStorage.getItem("token")

  let body = { first_name: input }
  console.log(body)

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const changeName = () => {
    console.log(input)
    if (token !== null) {
      const config = {
        headers: { Authorization: `JWT ${token}` },
      }
      //   axios.patch(`user/user`, body, config).then(
      axios.patch(`user/${userId}`, body, config).then(
        (res) => {
          // setUserData(res)
          // setIsLogged(true)
          console.log(userId)
          console.log(res)
        },
        (err) => {
          console.log(userId)
          console.log(config)
          console.log(body)
          console.log(err)
        }
      )
    }
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <header>cambiar nombre</header>
      <input
        onChange={inputHandler}
        value={input}
        type="text"
        placeholder="change name"
      />
      <button onClick={changeName}>confirmar</button>
    </motion.div>
  )
}
