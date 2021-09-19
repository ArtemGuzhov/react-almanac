import React, { useState } from 'react'

export const UseState = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('React almanac')

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const incrementDouble = () => {
    setCount(count + 1)
    setCount((prev) => {
      setCount(prev + 1)
    })
  }

  const decrementDouble = () => {
    setCount(count - 1)
    setCount((prev) => {
      setCount(prev - 1)
    })
  }

  const changeHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="useState">
      <div>
        <h1 style={{ fontWeight: 'lighter' }}>Счетчик</h1>
        <h2>{count}</h2>
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <button className="increment" onClick={incrementDouble}>
          +2
        </button>
        <button className="decrement" onClick={decrementDouble}>
          -2
        </button>
      </div>
      <br />
      <div>
        <input onChange={changeHandler} value={value} type={'text'} />
        <button onClick={() => alert(value)}>вернуть</button>
      </div>
    </div>
  )
}
