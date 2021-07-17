import { useState, createContext, useContext } from "react"

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)
  const [userData, setUserData] = useState({})
  const [history, setHistory] = useState()
  const [isAdmin, setIsAdmin] = useState(true)

  const values = {
    isLogged,
    setIsLogged,
    userData,
    setUserData,
    history,
    setHistory,
    isAdmin,
    setIsAdmin,
  }

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return context
}
