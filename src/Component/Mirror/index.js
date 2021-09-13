import React from "react"
import { useCount } from "../../Context/count"

const Mirror = () => {
  const { count } = useCount()

  return (
    <div>
      <span>
        <b>Mirror: {count}</b>
      </span>
    </div>
  )
}

export default Mirror
