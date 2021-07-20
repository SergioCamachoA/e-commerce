import axios from "axios"
import { useState, createContext, useContext } from "react"

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
    setAllProducts(tempArray)
  }

  const cartNewItem = () => {
    setCartCounter(cartCounter + 1)
  }

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
    cartCounter,
    // setCartCounter,
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
