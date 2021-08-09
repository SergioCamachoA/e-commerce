import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { mainProduct } from "../animation/pageAnimation"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"
import { useEffect, useState } from "react"

export const Offers = () => {
  const { cartNewItem, allProducts } = useGlobal()

  const currentUndef = {
    image: { planta },
    price: "",
    product_name: "",
    _id: "",
  }

  const [current, setCurrent] = useState(currentUndef)
  const [fetchedProducts, setFetchedProducts] = useState(false)

  useEffect(() => {
    let productsArray = []

    function printCurrent() {
      let randomIndex = Math.floor(Math.random() * allProducts.length)
      // console.log(productsArray)
      if (productsArray.length !== 0) {
        setCurrent(productsArray[randomIndex])
        setTimeout(() => {
          printCurrent()
        }, 4000)
      }
    }
    if (allProducts.length !== 0) {
      productsArray = allProducts.slice()
      printCurrent()
      setFetchedProducts(true)
    }

    //clean up to stop recursion on unmounting
    return () => {
      productsArray = []
    }
  }, [allProducts])

  return (
    <ImageStyled>
      {fetchedProducts && (
        <>
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
          >
            check these out
          </motion.header>
          <motion.div
            variants={mainProduct}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Link to={current !== undefined && `product/${current._id}`}>
              <div className="img-div">
                <img
                  src={current.image === undefined ? planta : current.image}
                  alt="item"
                />
              </div>
              <h3>{current.product_name}</h3>
              <h3>{`$${current.price}`}</h3>
            </Link>
            <button
              className="add-btn"
              onClick={() => cartNewItem(current._id)}
            >
              Add to cart
            </button>
          </motion.div>
        </>
      )}
    </ImageStyled>
  )
}

const ImageStyled = styled(motion.div)`
  text-align: center;
  z-index: 5;
  height: 30vw;
  width: 30%;
  background-color: rgba(202, 202, 202, 0.5);
  background: linear-gradient(45deg, var(--four) 0%, var(--bg) 100%);
  border-radius: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  header {
    font-size: 2rem;
    margin-top: 0.5rem;
    color: var(--one);
  }
  a {
    font-size: 1.5vw;
    margin-top: 2rem;
    text-decoration: none;
    color: var(--one);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-div {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    transition: 500ms;
    border: 4px solid var(--one);
    &:hover {
      border-radius: 1rem;
      filter: grayscale(0%);
    }
    img {
      width: 100%;
      min-height: 100%;
    }
  }
  .add-btn {
    font-size: 1.5vw;
    background-color: var(--three);
  }

  @media (max-width: 1084px) {
    width: 400px;
    height: 400px;
    header {
      font-size: 1.5rem;
    }
    a,
    .add-btn {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 400px;
    a,
    .add-btn {
      font-size: 1rem;
    }
  }
`
