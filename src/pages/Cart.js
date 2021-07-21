import React, { useEffect, useState } from "react"
import { mainPageAnimation } from "../animation/pageAnimation"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"

export const Cart = () => {
  //using useContext for global states
  const { isLogged, setHistory, cartNewItem, cartProducts, newTotal } =
    useGlobal()

  //submit handler for purchase to confirm login status and redirect ??
  const history = useHistory()

  //   if (isLogged) {
  //     history.push("/checkout")
  //   }
  function purchaseHandler() {
    if (!isLogged) {
      setHistory("/checkout")
      history.push("/login")
    } else {
      history.push("/checkout")
    }
  }

  const [cartProductsList, setCartProductsList] = useState(cartProducts)
  useEffect(() => {
    setCartProductsList(cartProducts)
  }, [cartProducts])

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
        <button onClick={purchaseHandler}>checkout</button>
      </section>
      <div className="item-list">
        {cartProductsList.map((each) => {
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
              <div className="amount">
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
  /* justify-content: space-between; */
  align-items: center;
  section {
    width: 95%;
    height: 25%;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: greenyellow; */
    header {
      margin: 1rem 0;
    }
  }
  button {
    background-color: var(--one);
    color: var(--bg);
    height: 30%;
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
    /* display: flex; */
    /* justify-content: center; */
  }
  .item {
    /* background-color: red; */
    height: 7vw;
    width: 65%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    font-size: 1rem;
    img {
      height: 7vw;
      width: 7vw;
      margin: 0 2rem;
      border: 3px solid var(--one);
      border-radius: 0.5rem;
      /* background-color: greenyellow; */
    }
    p {
      font-size: 1.3rem;
    }

    .amount {
      /* background-color: greenyellow; */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      p {
        margin: 0 1rem;
        /* background-color: var(--five); */
        /* width: 1rem; */
      }
      button {
        width: 0.5rem;
        display: flex;
        justify-content: center;
        /* height: 0.5rem; */
        background-color: var(--three);
      }
    }
  }
`
