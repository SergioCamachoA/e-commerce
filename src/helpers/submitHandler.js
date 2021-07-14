import axios from "axios"

export const logInHandler = (form, accessType, setIsLogged) => {
  axios
    .post(accessType, form)
    .then((res) => {
      // console.log(res)
      localStorage.setItem("token", res.data.token)
      setLogin(setIsLogged)
    })
    .catch((err) => console.log(err))
}
export const signupHandler = (form, accessType, setIsLogged) => {
  const redirectForm = { email: form.email, password: form.password }
  axios
    .post(accessType, form)
    .then(() => {
      // console.log(res)
      logInHandler(redirectForm, "login", setIsLogged)
    })
    .catch((err) => console.log(err))
}

//esta funcion es la que cambia el estado de isLogged y redirige al homepage con el login valido,
//es invocada en la funcion logInHandler y en App.js en el primer render
export const setLogin = (setIsLogged) => {
  const token = localStorage.getItem("token")
  if (token !== null) {
    const config = {
      headers: { Authorization: `JWT ${token}` },
    }
    axios.get("user/me", config).then(
      (res) => {
        console.log(res)
        setIsLogged(true)
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
//LOGGING IN WITH
//email:
// x@x.com
//password
// test
