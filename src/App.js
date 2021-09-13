import React from "react"
import Counter from "./Component/Counter"
import Mirror from "./Component/Mirror"
import ThemeSwitch from "./Content/index"

// Provider
import CountProvider from "./Context/count.js"
import ThemeProvider from "./Context/theme.js"

const App = () => {
  return (
    <ThemeProvider>
      <CountProvider>
        <ThemeSwitch>
          <Counter />
          <hr />
          <Mirror />
        </ThemeSwitch>
      </CountProvider>
    </ThemeProvider>
  )
}

export default App
