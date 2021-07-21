import axios from "axios"
import { useState, createContext, useContext, useCallback } from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [userData, setUserData] = useState({})
  const [history, setHistory] = useState()
  const [isAdmin, setIsAdmin] = useState(true)
  const [allProducts, setAllProducts] = useState([])
  const [cartCounter, setCartCounter] = useState(0)

  async function getProducts() {
    const tempArray = await axios
      .get("item")
      .then((res) => {
        return res.data
        // setAllProducts(res.data)
      })
      .catch((err) => console.log(err))
    // console.log(tempArray)
    if (tempArray !== undefined) {
      setAllProducts(tempArray)
    }
  }

  const [cartProducts, setCartProducts] = useState([])
  const [newTotal, setNewTotal] = useState("0")

  const cartNewItem = useCallback(
    (id, itemSumRest) => {
      const clonProducts = [...cartProducts]
      let selectedItem = allProducts.find((el) => el._id === id)
      let alreadyAdded = cartProducts.findIndex((el) => el._id === id)
      let amount = 1

      if (alreadyAdded === -1) {
        clonProducts.push({ ...selectedItem, amount: amount })
      } else {
        let newAmount = clonProducts[alreadyAdded].amount

        if (itemSumRest === "subtract") {
          if (newAmount === 1) {
            clonProducts.splice(alreadyAdded, 1)
          } else {
            clonProducts[alreadyAdded] = {
              ...selectedItem,
              amount: newAmount - 1,
            }
          }
        } else {
          clonProducts[alreadyAdded] = {
            ...selectedItem,
            amount: newAmount + 1,
          }
        }
      }

      const reducer = (acumulator, currentValue) => acumulator + currentValue

      const totalCount = () => {
        const amountsArray = clonProducts.map((each) => each.amount)

        const allItems =
          amountsArray.length !== 0 ? amountsArray.reduce(reducer) : 0

        setCartCounter(allItems)
      }

      const totalCost = () => {
        const costsArray = clonProducts.map((each) => each.price * each.amount)
        const totalCost =
          costsArray.length !== 0 ? costsArray.reduce(reducer) : 0
        setNewTotal(totalCost)
      }

      totalCost()
      totalCount()
      setCartProducts(clonProducts)
    },
    [allProducts, cartProducts]
  )

  const values = {
    isLogged,
    setIsLogged,
    userData,
    setUserData,
    history,
    setHistory,
    isAdmin,
    setIsAdmin,
    allProducts,
    getProducts,
    cartProducts,
    cartCounter,
    newTotal,
    cartNewItem,
  }

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return context
}
