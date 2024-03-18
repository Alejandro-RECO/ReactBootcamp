import { useState } from "react"

export const useInputState = (initialState) =>{
  const [state, setState] = useState(initialState)

  const handleChange = (e) =>{
    const {name, value} = e.target 
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return [state, handleChange]
}