import axios from "axios"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Redirect, useLocation } from "react-router-dom"
import styled from "styled-components"
import { pageAnimation } from "../animation/animation"

export const Settings = ({ data, setData, isLogged, setHistory }) => {
  const [userId, setUserId] = useState("")
  const [input, setInput] = useState("")
  let location = useLocation()

  //save location pathname in a state to be used in redirection after auth on login
  useEffect(() => {
    setHistory(location.pathname)
  }, [location, setHistory])

  useEffect(() => {
    data !== undefined && setUserId(data._id)
  }, [data])

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const changeName = () => {
    const token = localStorage.getItem("token")
    let body = { first_name: input }
    if (token !== null) {
      const config = {
        headers: { Authorization: `JWT ${token}` },
      }
      axios.patch(`user/${userId}`, body, config).then(
        (res) => {
          setData(res.data)
          setInput("")
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }

  const [specsType, setSpecsType] = useState([])
  const [specs, setSpecs] = useState([])

  useEffect(() => {
    let specsKey = []
    let specsValue = []
    for (let key in data) {
      if (
        key !== "role" &&
        key !== "isActive" &&
        key !== "_id" &&
        key !== "updatedAt" &&
        key !== "__v"
      ) {
        specsKey.push(key)
        specsValue.push(data[key])
      }
    }
    setSpecsType(specsKey)
    setSpecs(specsValue)
  }, [data])

  return isLogged ? (
    <StyledSettings>
      <div>
        <header>your info</header>
        <StyledInfo>
          <div className="specs">
            {specsType.map((each, index) => {
              return <p key={index}>{each}</p>
            })}
          </div>
          <div>
            {specs.map((each, index) => {
              return <p key={index}>{each}</p>
            })}
          </div>
        </StyledInfo>
      </div>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <header>change name</header>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="new name"
          />
          <button onClick={changeName}>confirm</button>
        </form>
      </motion.div>
    </StyledSettings>
  ) : (
    <Redirect to="login" />
  )
}

const StyledInfo = styled(motion.div)`
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  .specs {
    color: var(--one);
  }
`
const StyledSettings = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  header {
    text-align: center;
  }
  div {
    margin-left: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  select,
  button {
    min-height: 2rem;
    height: 4vh;
    min-width: 16rem;
    width: 20vw;
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    border: none;
    background-color: var(--bg);
    transition: 400ms;
    &:hover {
      background-color: var(--three);
      color: var(--one);
    }
  }
  button {
    background-color: var(--one);
    color: var(--three);
  }

  input:focus,
  select:focus {
    outline: none;
    background-color: var(--three);
  }
`
