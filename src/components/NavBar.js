import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
  function submitHandler(e) {
    e.preventDefault()
  }
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fas fa-arrow-left"></i>
        <h2>home</h2>
      </Link>
      <form onSubmit={submitHandler} className="search-form">
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
        <input type="text" className="search-input" />
      </form>
    </div>
  )
}
