import axios from "axios"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import { pageAnimation } from "../animation/animation"

export const Settings = ({ data, isLogged, setHistory }) => {
  const [userId, setUserId] = useState("")
  const [input, setInput] = useState("")
  let location = useLocation()

  //save location pathname in a state to be used in redirection after auth on login
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  useEffect(() => {
    console.log(data._id)
    !data && setUserId(data._id)
  }, [data, isLogged, userId])

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const changeName = () => {
    const token = localStorage.getItem("token")
    let body = { first_name: input }
    let id = userId
    if (token !== null) {
      const config = {
        headers: { Authorization: `JWT ${token}` },
      }
      axios.patch(`user/60efb1f85b8e9c0017883858`, body, config).then(
        // axios.patch(`user/${userId}`, body, config).then(
        (res) => {
          console.log(id)
          console.log(res)
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }

  return isLogged ? (
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
  ) : (
    <Redirect to="login" />
  )
}
