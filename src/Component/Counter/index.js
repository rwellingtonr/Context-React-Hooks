import React from "react"

import { useCount } from "../../Context/count"

const Counter = () => {
  const { count, setCount } = useCount()

  return (
    <div>
      <span>
        <b>Counter: {count} </b>
      </span>
      <br />
      <button type="submit" onClick={() => setCount(count + 1)}>
        Increase +1
      </button>
      <button type="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter
