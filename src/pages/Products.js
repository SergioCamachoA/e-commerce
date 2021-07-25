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
            <div key={each._id} className="each-item">
              <Link to={`/product/${each._id}`}>
                <div className="img-div">
                  <img
                    src={each.image === undefined ? planta : each.image}
                    alt="item in stock"
                  />
                </div>
                <h2>{each.product_name}</h2>
                <h2 className="price">$ {each.price}</h2>
              </Link>
              <button onClick={() => cartNewItem(each._id)}>{add}</button>
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
  justify-content: center;
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
    /* width: 1500px; */
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 5vh;
    transition: 500ms;
    background-color: #cacacadf;
    box-shadow: inset 0 0 10px var(--two);
    width: 220px;
    height: 320px;
    /* height: 26vw; */
    margin: 1rem;
    border-radius: 2rem 2rem 2rem 0;
    &:hover {
      background-color: var(--bg);
      box-shadow: 0 0 10px var(--two);
      h2 {
        color: var(--one);
      }
    }
    button,
    h2 {
      margin: 0 1rem 0 2rem;
      /* min-width: 40px; */
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 2.7vh;
      font-family: "chillbold";
      color: var(--one);
      max-height: 60px;
    }
    button {
      background-color: transparent;
      /* background-color: greenyellow; */
      position: relative;
      left: 60px;
      bottom: 10px;

      color: rgba(41, 41, 41, 1);
      font-size: 1.7rem;
      /* width: 70%; */
      border-radius: 0%;
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
      bottom: 10px;
      left: 0;
    }
    a {
      /* background-color: greenyellow; */
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .img-div {
      /* background-color: red; */
      height: 180px;
      width: 180px;
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
      img {
        /* max-height: 200px; */
        width: 120%;
        min-height: 100%;

        /* max-height: 180%; */
      }
    }
  }
  @media (max-width: 1084px) {
    position: fixed;
    top: 11vh;
    height: 89vh;

    .each-item {
      min-width: 230px;
      /* width: 17vw; */
      /* min-height: ; */
      min-height: 350px;
      /* height: ; */
      overflow: hidden;
      a {
        overflow: hidden;
      }
      /* h2 {
        height: 10px;
      } */
      .price {
        height: 8vw;
        top: 310px;
      }
      button {
        top: 0px;
      }
      .img-div {
        overflow-y: hidden;
      }
    }
  }

  @media (max-width: 700px) {
    /* background-color: greenyellow; */
    top: 80px;
    .each-item {
      overflow: hidden;
      /* min-width: 350px; */
      width: 250px;
      /* min-height: ; */
      min-height: 320px;
      /* height: 300px; */
      &:hover {
        background-color: #cacacadf;
        box-shadow: inset 0 0 10px var(--two);
        h2 {
          color: var(--one);
        }
      }
      .img-div {
        overflow-y: hidden;
        img {
          overflow-y: hidden;
          min-height: 170px;
          min-width: 170px;
          border-radius: 1rem;
          margin-bottom: 0rem;
        }
      }

      button {
        left: 80px;
        top: -10px;
        /* height: 8vw; */
        /* top: 5px; */
      }
      .price {
        /* height: 8vw; */
        top: 280px;
      }
    }
  }
`
