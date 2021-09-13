import React from "react"

import { useCount } from "../../Context"

const Counter = () => {
  const { count, setCount } = useCount()

  return (
    <div>
      <span>
        <b>Counter: {count} </b>
      </span>
      <button type="submit" onClick={() => setCount(count + 1)}>
        Increase +1
      </button>
    </div>
  )
}

export default Counter
