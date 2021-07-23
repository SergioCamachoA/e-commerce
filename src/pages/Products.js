import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { productsPageAnimation } from "../animation/pageAnimation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useGlobal } from "../hooks/useGlobal"
import planta from "../svg/planta4.svg"
// import { Loader } from "../components/Loader"

const add = <FontAwesomeIcon icon={faCartPlus} />

export const Products = ({ search }) => {
  const { allProducts, cartNewItem } = useGlobal()
  // const { search } = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (search === null) {
      setFilteredProducts([...allProducts])
    } else {
      const toBeFiltered = [...allProducts]
      const filtered = toBeFiltered.filter((each) => {
        return each.product_name.toLowerCase().includes(search.toLowerCase())
      })
      setFilteredProducts(filtered)
    }
  }, [allProducts, search])
  return (
    <ProductsStyle
      exit="exit"
      variants={productsPageAnimation}
      initial="hidden"
      animate="show"
      className="Products"
    >
      {/* <header>products</header> */}
      {/* <div> */}
      {filteredProducts.length === 0 ? (
        <header>nothing found, sorry</header>
      ) : (
        filteredProducts.map((each) => {
          return (
            <div className="each-item">
              <Link to={`/product/${each._id}`} key={each._id}>
                <img
                  src={each.image === undefined ? planta : each.image}
                  alt="item in stock"
                />
                <h2>{each.product_name}</h2>
                <h2 className="price">$ {each.price}</h2>
              </Link>
              <p onClick={() => cartNewItem(each._id)}>{add}</p>
            </div>
          )
        })
      )}
      {/* </div> */}
    </ProductsStyle>
  )
}

const ProductsStyle = styled(motion.div)`
  /* background-color: greenyellow; */
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 2vw;
  text-align: center;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  width: 80vw;
  height: 100vh;
  header {
    position: relative;
    /* z-index: 99; */
    height: 100vh;
    width: 100vw;
    top: 40vh;
    /* background-color: greenyellow; */
  }
  .each-item {
    display: flex;
    /* width: 500px; */
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 2rem;
    transition: 500ms;
    background-color: #cacacadf;
    box-shadow: inset 0 0 10px var(--two);
    /* background: linear-gradient(145deg, var(--four) 0%, var(--bg) 100%); */

    width: 17vw;
    height: 26vw;
    margin: 1rem;
    border-radius: 2rem 2rem 2rem 0;
    &:hover {
      background-color: var(--bg);
      box-shadow: 0 0 10px var(--two);
      h2 {
        color: var(--one);
      }
    }
    p,
    h2 {
      margin: 0 1rem 0 2rem;
      /* min-width: 40px; */
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 2.7vh;
      font-family: "chillbold";
      color: var(--one);
      height: 5vw;
    }
    p {
      /* background-color: greenyellow; */
      position: relative;
      left: 5vw;
      color: rgba(41, 41, 41, 1);
      font-size: 1.7rem;
      /* width: 70%; */
      justify-content: flex-end;
      align-items: flex-start;
      cursor: pointer;
      transition: 500ms;
      &:focus {
        color: var(--three);
      }
    }
    h2 {
      overflow: hidden;
    }
    .price {
      position: absolute;
      top: 23vw;
    }
    a {
      /* background-color: greenyellow; */
      min-height: 23vw;
    }

    img {
      background-color: red;

      max-height: 15vw;
      min-height: 10vw;
      max-width: 13vw;
      min-width: 10vw;
      border-radius: 50%;
      border: 4px solid var(--four);
      margin: 1rem;
      transition: 500ms;
      background-color: var(--bg);
      /* box-shadow: 0 0 10px var(--two); */
      color: var(--one);

      &:hover {
        border-radius: 1rem;
      }
    }
  }
`
