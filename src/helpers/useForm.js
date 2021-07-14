import { useEffect, useState } from "react"

export function useForm(values = {}) {
  const [form, setForm] = useState(values)
  useEffect(() => {
    console.log(form)
  }, [form])

  function onChangeHandler(e) {
    const updatedForm = {
      ...form,
      [e.target.name]:
        e.target.type === "select"
          ? e.target[e.target.selectedIndex]
          : e.target.value,
    }
    setForm(updatedForm)
  }
  return { form, setForm, onChangeHandler }
}
