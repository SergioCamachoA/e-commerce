import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalContextProvider } from "./hooks/useGlobal"
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import App from "./App"

axios.defaults.baseURL = "https://ecomerce-master.herokuapp.com/api/v1/"
ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
