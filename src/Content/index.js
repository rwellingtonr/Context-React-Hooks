import React from "react"
import { useTheme, themes } from "../Context/theme"

// 'children' means that it gets the children props.
export default function ThemeSwitch({ children }) {
  const { theme, setTheme } = useTheme()
  return (
    <div style={{ background: theme.background, color: theme.text }}>
      {children}

      <hr />
      <button onClick={() => setTheme(theme.id === 1 ? themes[1] : themes[0])}>
        Switch the Theme Color
      </button>
    </div>
  )
}
