import { Route, Switch, useLocation } from "react-router-dom"
import "./styles/App.css"
import { Main } from "./pages/Main"
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Products } from "./pages/Products"
import { SingleProduct } from "./pages/SingleProduct"
import { NewProduct } from "./pages/NewProduct"
import { Error } from "./pages/Error"
import { NavBar } from "./components/NavBar"
// import { GlobalStyle } from "./GlobalStyles"
import { AnimatePresence } from "framer-motion"
import { Cart } from "./components/Cart"

function App() {
  const location = useLocation()
  // console.log(location)
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <NavBar />
      <Cart />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" children={<Main />} />
          <Route path="/login" children={<Login />} />
          <Route path="/signup" children={<Signup />} />
          <Route path="/products" children={<Products />} />
          <Route path="/product/:id" children={<SingleProduct />} />
          <Route path="/add-new" children={<NewProduct />} />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
