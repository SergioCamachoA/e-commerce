import React from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

const trash = <FontAwesomeIcon icon={faTrashAlt} />

export const Cart = () => {
  //using useContext for global states
  const { isLogged, setHistory, cartNewItem, cartProducts, newTotal } =
    useGlobal()

  //submit handler for purchase to confirm login status and redirect ??
  const history = useHistory()

  function purchaseHandler() {
    if (!isLogged) {
      setHistory("/checkout")
      history.push("/login")
    } else {
      history.push("/checkout")
    }
  }

  return (
    <CartStyled
      exit="exit"
      variants={mainPageAnimation}
      initial="hidden"
      animate="show"
    >
      <section>
        <header>your items</header>
        <h2>$ {newTotal}</h2>
        {newTotal !== 0 && <button onClick={purchaseHandler}>checkout</button>}
      </section>
      <div className="item-list">
        {cartProducts.map((each) => {
          return (
            <div key={each._id} className="item">
              <img
                src={each.image === undefined ? planta : each.image}
                alt="item in stock"
              />
              <div className="specs">
                <p>{each.product_name}</p>
                <p>$ {each.price}</p>
              </div>

              <p className="each-total">
                $ {each.price !== undefined && each.price * each.amount}
              </p>
              <div className="amount">
                <button
                  className="trash"
                  onClick={() => cartNewItem(each._id, "trash")}
                >
                  {trash}
                </button>
                <button onClick={() => cartNewItem(each._id, "subtract")}>
                  -
                </button>
                <p>{each.amount}</p>
                <button onClick={() => cartNewItem(each._id)}>+</button>
              </div>
            </div>
          )
        })}
      </div>
    </CartStyled>
  )
}

const CartStyled = styled(motion.div)`
  background: linear-gradient(315deg, var(--four) 0%, var(--bg) 100%);
  border-radius: 1rem;
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: greenyellow; */
  @media (max-width: 700px) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  section {
    width: 95%;
    min-height: 80px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    header {
      margin: 1rem 0;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      height: 130px;
      font-size: 1rem;
      header {
        margin: 0;
      }
      button {
        font-size: 1rem;
        height: 27%;
      }
    }
  }
  button {
    background-color: var(--one);
    color: var(--bg);
    height: 40%;
    padding: 0 1rem;
    font-size: 1.5rem;
    transition: 500ms;
    &:hover {
      background-color: var(--bg);
      color: var(--one);
    }
  }
  .item-list {
    width: 100%;
    overflow: scroll;
  }
  .item {
    height: 7vw;
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 7vw;
      width: 7vw;
      margin: 0 2rem;
      border: 3px solid var(--one);
      border-radius: 0.5rem;
    }
    p {
      font-size: 1.8vw;
    }
    .specs {
      width: 40%;
    }
    .each-total {
      width: 22%;
    }

    .amount {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      p {
        margin: 0 0.5rem;
      }
      button {
        width: 0.5rem;
        display: flex;
        justify-content: center;
        background-color: var(--three);
      }
      .trash {
        height: 2rem;
        border-radius: 0;
        display: flex;
        align-items: center;
        color: var(--three);
        margin-right: 1rem;
        background-color: transparent;
        &:hover {
          color: var(--one);
        }
      }
    }
    @media (max-width: 700px) {
      /* background-color: greenyellow; */
      height: 150px;
      flex-wrap: wrap;
      section,
      button {
        overflow-y: hidden;
      }
      p {
        font-size: 1rem;
      }
      img {
        height: 80px;
        width: 80px;
      }
      .each-total {
        margin-left: 2rem;
      }
    }
  }
`
