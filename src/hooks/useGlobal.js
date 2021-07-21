import axios from "axios"
import {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [userData, setUserData] = useState({})
  const [history, setHistory] = useState()
  const [isAdmin, setIsAdmin] = useState(true)
  const [allProducts, setAllProducts] = useState([])
  const [cartCounter, setCartCounter] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [newTotal, setNewTotal] = useState(0)

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

  const reducer = (acumulator, currentValue) => acumulator + currentValue

  const totalCount = (clonProducts) => {
    const amountsArray = clonProducts.map((each) => each.amount)

    const allItems =
      amountsArray.length !== 0 ? amountsArray.reduce(reducer) : 0

    setCartCounter(allItems)
  }

  const totalCost = (clonProducts) => {
    const costsArrayFilter = clonProducts.filter(
      (each) => each.price !== undefined
    )
    const costsArray = costsArrayFilter.map((each) => each.price * each.amount)
    const totalCost = costsArray.length !== 0 ? costsArray.reduce(reducer) : 0
    setNewTotal(totalCost)
  }

  useEffect(() => {
    const fetchedLocal = localStorage.getItem("shoppingCart")
    // console.log(fetchedLocal)
    const storedCart =
      fetchedLocal !== null ? [...JSON.parse(fetchedLocal)] : []
    // console.log(storedCart)
    setCartProducts(storedCart)
    totalCost(storedCart)
    totalCount(storedCart)
    // eslint-disable-next-line
  }, [])

  const cartNewItem = useCallback(
    (id, amountModifier) => {
      const clonProducts = [...cartProducts]
      let selectedItem = allProducts.find((el) => el._id === id)
      let alreadyAdded = cartProducts.findIndex((el) => el._id === id)
      let amount = 1

      if (alreadyAdded === -1) {
        clonProducts.push({ ...selectedItem, amount: amount })
      } else {
        let newAmount = clonProducts[alreadyAdded].amount
        if (amountModifier === "trash") {
          clonProducts.splice(alreadyAdded, 1)
        } else if (amountModifier === "subtract") {
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

      totalCost(clonProducts)
      totalCount(clonProducts)
      localStorage.setItem("shoppingCart", JSON.stringify(clonProducts))
      setCartProducts(clonProducts)
    },
    // eslint-disable-next-line
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
    setNewTotal,
    cartNewItem,
    setCartProducts,
    setCartCounter,
  }

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return context
}
