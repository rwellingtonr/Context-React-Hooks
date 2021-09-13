import React, { createContext, useState, useContext } from "react"

export const themes = [
  { id: 1, background: "white", text: "black" },

  { id: 2, background: "black", text: "white" },
]
// Creating the context that will be shared with all children
// Fist of all, I have to create a context
export const ThemeContext = createContext()
// My own Hook
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("Cannot switch the theme")
  const { theme, setTheme } = context
  return { theme, setTheme }
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes[1])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
