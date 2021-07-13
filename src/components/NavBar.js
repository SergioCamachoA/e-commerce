import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  // faBars,
  faSearch,
  faUserCircle,
  // faTimes,
  faClipboardList,
  faPlus,
  faFingerprint,
  faCircle,
} from "@fortawesome/free-solid-svg-icons"

const back = <FontAwesomeIcon icon={faArrowLeft} />
const search = <FontAwesomeIcon icon={faSearch} />
const newUser = <FontAwesomeIcon icon={faUserCircle} />
const user = <FontAwesomeIcon icon={faFingerprint} />
const all = <FontAwesomeIcon icon={faClipboardList} />
const single = <FontAwesomeIcon icon={faCircle} />
const add = <FontAwesomeIcon icon={faPlus} />
// const hamburger = <FontAwesomeIcon icon={faBars} />
// const close = <FontAwesomeIcon icon={faTimes} />

export const NavBar = () => {
  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <div className="navbar">
      <Link to="/">
        <i>{back}</i>
        <h2>home</h2>
      </Link>
      <form onSubmit={submitHandler}>
        <i>{search}</i>
        <h2>search</h2>
      </form>
      <Link to="/login">
        <i>{user}</i>
        <h2>login</h2>
      </Link>
      <Link to="/signup">
        <i>{newUser}</i>
        <h2>signup</h2>
      </Link>
      <Link to="/products">
        <i>{all}</i>
        <h2>all products</h2>
      </Link>
      <Link to="/product/example">
        <i>{single}</i>
        <h2>example product</h2>
      </Link>
      <Link to="/add-new">
        <i>{add}</i>
        <h2>new product</h2>
      </Link>
    </div>
  )
}
