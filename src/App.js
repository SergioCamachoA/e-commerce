import { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles"
import { AnimatePresence } from "framer-motion"
import { useGlobal } from "./hooks/useGlobal"
import { useQuery } from "./hooks/useQuery"
import { useAuth } from "./hooks/useAuth"
import { SingleProduct } from "./pages/SingleProduct"
import { NewProduct } from "./pages/NewProduct"
import { Products } from "./pages/Products"
import { Checkout } from "./pages/Checkout"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Error } from "./pages/Error"
import { Cart } from "./pages/Cart"
import { Main } from "./pages/Main"
import { CartIcon } from "./components/CartIcon"
import { NavBar } from "./components/NavBar"
import { Planta } from "./components/Planta"
import { Burger } from "./components/Burger"
import { Settings } from "./pages/Settings"
// import { Home } from "./pages/Home"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  const { setLogin } = useAuth()
  const { getProducts } = useGlobal()

  const location = useLocation()

  let query = useQuery()

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
      <Planta />
      <Burger />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main} />
          {/* <PrivateRoute path="/home" component={Home} /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route
            path="/products"
            children={<Products search={query.get("search")} />}
          />
          <PrivateRoute path="/add-new" component={NewProduct} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/checkout" component={Checkout} />
          <Route path="*" component={Error} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
