import axios from "axios"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { pageAnimation } from "../animation/pageAnimation"
import { useForm } from "../hooks/useForm"
import { useGlobal } from "../hooks/useGlobal"

export const Settings = () => {
  const { userData, setUserData } = useGlobal()

  const [userId, setUserId] = useState("")

  let tempInfo = {
    first_name: "",
    last_name: "",
    email: "",
  }
  const { form, setForm, onChangeHandler } = useForm(tempInfo)

  useEffect(() => {
    userData !== undefined && setUserId(userData._id)
  }, [userData])

  const ChangeName = () => {
    const token = localStorage.getItem("token")
    let body = {
      first_name: !form.first_name ? userData.first_name : form.first_name,
      last_name: !form.last_name ? userData.last_name : form.last_name,
      email: !form.email ? userData.email : form.email,
    }
    if (token !== null) {
      const config = {
        headers: { Authorization: `JWT ${token}` },
      }
      axios.patch(`user/${userId}`, body, config).then(
        (res) => {
          setUserData(res.data)
          setForm(tempInfo)
        },
        (err) => {
          console.log(err.response)
        }
      )
    }
  }

  const [specsType, setSpecsType] = useState([])
  const [specs, setSpecs] = useState([])

  useEffect(() => {
    let specsKey = []
    let specsValue = []
    for (let key in userData) {
      if (
        // key !== "role" &&
        key !== "isActive" &&
        key !== "_id" &&
        key !== "updatedAt" &&
        key !== "createdAt" &&
        key !== "__v"
      ) {
        specsKey.push(key)
        if (userData[key].includes(":")) {
          specsValue.push(userData[key].slice(0, 10))
        } else if (userData[key] === "F") {
          specsValue.push("female")
        } else if (userData[key] === "M") {
          specsValue.push("male")
        } else {
          specsValue.push(userData[key])
        }
      }
    }
    setSpecsType(specsKey)
    setSpecs(specsValue)
  }, [userData])

  return (
    <StyledSettings
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div>
        <header>your info</header>
        <StyledInfo>
          <div className="specs">
            {specsType.map((each, index) => {
              return <p key={index}>{each.replace("_", " ")}</p>
            })}
          </div>
          <div>
            {specs.map((each, index) => {
              return <p key={index}>{each}</p>
            })}
          </div>
        </StyledInfo>
      </div>
      <StyledChanges>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={onChangeHandler}
            value={form.first_name}
            name="first_name"
            type="text"
            placeholder="new name"
          />
          <input
            onChange={onChangeHandler}
            value={form.last_name}
            name="last_name"
            type="text"
            placeholder="new last name"
          />
          <input
            onChange={onChangeHandler}
            value={form.email}
            name="email"
            type="text"
            placeholder="new email"
          />
          <button onClick={ChangeName}>confirm</button>
        </form>
      </StyledChanges>
    </StyledSettings>
  )
}

const StyledInfo = styled(motion.div)`
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  div {
    margin: 0 1rem;
    font-size: 1.5rem;
    @media (max-width: 900px) {
      font-size: 1.3rem;
    }
  }
  .specs {
    color: var(--one);
  }
`
const StyledChanges = styled(motion.div)`
  /* background-color: greenyellow; */
  display: flex;
  flex-direction: row;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input,
  button {
    min-height: 2rem;
    height: 4vh;
    min-width: 15rem;
    width: 15vw;
    margin: 0.5rem 0.5rem;
    font-size: 1.3rem;
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
    background-color: var(--three);
    color: var(--one);
    min-width: 7rem;
    width: 10vw;
  }

  input:focus,
  select:focus {
    outline: none;
    background-color: var(--three);
  }
`

const StyledSettings = styled(motion.div)`
  background-color: var(--bg);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  header {
    margin-left: 2rem;
    text-align: center;
    font-size: 3rem;
    color: var(--one);
  }
`
