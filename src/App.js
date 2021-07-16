import { Route, Switch, useLocation } from "react-router-dom"
import { Main } from "./pages/Main"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Products } from "./pages/Products"
import { SingleProduct } from "./pages/SingleProduct"
import { NewProduct } from "./pages/NewProduct"
import { Error } from "./pages/Error"
import { NavBar } from "./components/NavBar"
import { GlobalStyle } from "./styles/GlobalStyles"
import { AnimatePresence } from "framer-motion"
import { Cart } from "./components/Cart"
import { useEffect } from "react"
import { useAuth } from "./hooks/useAuth"
import { Settings } from "./pages/Settings"
// import { GlobalContextProvider } from "./hooks/useGlobal"

function App() {
  const { setLogin } = useAuth()
  // const { isLogged } = useGlobal()

  const location = useLocation()
  // const [setIsLogged] = useState(false)
  // const [userData, setUserData] = useState({})
  // const [history, setHistory] = useState()

  useEffect(() => {
    console.log("puto bucle")
    setLogin()
  }, [])

  // console.log(location)
  return (
    <div className="App">
      {/* <GlobalContextProvider> */}
      <GlobalStyle />
      <NavBar />
      <Cart />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            children={
              <Main
              // data={userData}
              // isLogged={isLogged}
              // setIsLogged={setIsLogged}
              // setHistory={setHistory}
              />
            }
          />
          <Route
            path="/login"
            exact
            children={
              <Login
              // history={history}
              // setHistory={setHistory}
              // isLogged={isLogged}
              // setIsLogged={setIsLogged}
              // setUserData={setUserData}
              />
            }
          />
          <Route
            path="/signup"
            exact
            children={
              <Signup
              // isLogged={isLogged}
              // setIsLogged={setIsLogged}
              // setUserData={setUserData}
              />
            }
          />
          <Route path="/products" children={<Products />} />
          <Route path="/product/:id" children={<SingleProduct />} />
          <Route path="/add-new" children={<NewProduct />} />
          <Route
            path="/settings"
            children={
              <Settings
              // setHistory={setHistory}
              // isLogged={isLogged}
              // data={userData}
              // setData={setUserData}
              />
            }
          />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
      {/* </GlobalContextProvider> */}
    </div>
  )
}

export default App
