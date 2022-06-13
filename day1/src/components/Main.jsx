import React, { useState } from 'react'

function Main() {

  const[count, setCount] = useState(0)

  const Increment = () => {
    setCount(count+1)
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Click to increase the number</button>
    </div>
  )
}

export default Main 