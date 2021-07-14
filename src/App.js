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
import { useEffect, useState } from "react"
import { setLogin } from "./helpers/submitHandler"

function App() {
  const location = useLocation()
  const [isLogged, setIsLogged] = useState()
  useEffect(() => {
    setLogin(setIsLogged)
  }, [])

  // console.log(location)
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar isLogged={isLogged} />
      <Cart />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/"
            children={<Main isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/login"
            children={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route
            path="/signup"
            children={<Signup isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
          <Route path="/products" children={<Products />} />
          <Route path="/product/:id" children={<SingleProduct />} />
          <Route
            path="/add-new"
            children={<NewProduct isLogged={isLogged} />}
          />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
