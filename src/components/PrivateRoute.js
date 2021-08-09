import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useGlobal } from "../hooks/useGlobal"

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLogged } = useGlobal()
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
