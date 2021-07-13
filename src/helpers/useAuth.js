// import axios from "axios"
import { useEffect, useState } from "react"

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false)

  return { isLogged, setIsLogged }
}
