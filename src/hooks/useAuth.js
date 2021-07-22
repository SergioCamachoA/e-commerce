import axios from "axios"
import { useGlobal } from "./useGlobal"

export const useAuth = () => {
  const { setIsLogged, setUserData, setIsAdmin } = useGlobal()

  const logInHandler = (form, accessType, setIsLoading) => {
    axios
      .post(accessType, form)
      .then((res) => {
        // console.log(res)
        localStorage.setItem("token", res.data.token)
        setLogin()
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }
  const signupHandler = (form, accessType, setIsLoading) => {
    const redirectForm = { email: form.email, password: form.password }
    axios
      .post(accessType, form)
      .then(() => {
        // console.log(res)
        logInHandler(redirectForm, "login")
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }

  //esta funcion es la que cambia el estado de isLogged y redirige al homepage con el login valido,
  //es invocada en la funcion logInHandler y en App.js en el primer render
  const setLogin = () => {
    // console.log("rep")
    const token = localStorage.getItem("token")
    setIsLogged(!!token)
    if (token !== null) {
      const config = {
        headers: { Authorization: `JWT ${token}` },
      }
      axios.get("user/me", config).then(
        (res) => {
          setUserData(res.data.user)
          // console.log(res.data.user.role)
          if (res.data.user.role === "ADMIN") {
            setIsAdmin(true)
          } else {
            setIsAdmin(false)
          }
        },
        (err) => {
          console.log(err)
          setIsAdmin(false)
          setIsLogged(false)
        }
      )
    }
  }

  return { logInHandler, signupHandler, setLogin }
}
//LOGGING IN WITH
//email:
// x@x.com
//password
// test
