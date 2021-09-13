import React from "react"
import Counter from "./Component/Counter"
import Mirror from "./Component/Mirror"
import CountProvider from "./Context"

const App = () => {
  return (
    <CountProvider>
      <div>
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  )
}

export default App
