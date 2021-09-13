import React, { useContext, createContext, useState } from "react"

// Creating the context that will be shared with all children
// Fist of all, I have to create a context
export const CountContext = createContext()
// Here I'm creating my own Hook
export const useCount = () => {
  // I must pass the context created through the useContext
  const context = useContext(CountContext)
  if (!context) throw new Error("Context hasn't been created yet")
  //   These proprieties comes from the CountProvider
  const { count, setCount } = context
  return { count, setCount }
}

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  )
}
