import axios from "axios"

export const submitHandler = (form, setIsLogged, accessType) => {
  //   setIsLogged(true)
  console.log(form)

  axios
    .post(accessType, form)
    // .post("https://ecomerce-master.herokuapp.com/api/v1/signup", form)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token))
    })
    .catch((err) => console.log(err))
}

// birth_date: "1995-01-01"
// email: "
// sdfewe@wegwe.com

// first_name: "test"
// gender: "F"
// last_name: "test"
// password: "test12345"
