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
import { CartIcon } from "./components/CartIcon"
import { useEffect } from "react"
import { useAuth } from "./hooks/useAuth"
import { Settings } from "./pages/Settings"
// import { Planta } from "./components/Planta"
import { useGlobal } from "./hooks/useGlobal"
import { Checkout } from "./pages/Checkout"
import { Cart } from "./pages/Cart"

function App() {
  const { setLogin } = useAuth()
  const { getProducts } = useGlobal()

  const location = useLocation()

  useEffect(() => {
    setLogin()
    getProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <CartIcon />
      {/* <Planta /> */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" children={<Main />} />
          <Route path="/login" exact children={<Login />} />
          <Route path="/signup" exact children={<Signup />} />
          <Route path="/products/:search" children={<Products />} />
          <Route path="/products/" children={<Products />} />
          <Route path="/product/:id" children={<SingleProduct />} />
          <Route path="/add-new" children={<NewProduct />} />
          <Route path="/settings" children={<Settings />} />
          <Route path="/cart" children={<Cart />} />
          <Route path="/checkout" children={<Checkout />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
