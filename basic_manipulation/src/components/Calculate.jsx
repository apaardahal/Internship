import React, { useState } from 'react'
import './calculate.css';

function Calculate() {

  const[number1, setNumber1] = useState('0');
  const[number2, setNumber2] = useState('0');
  const[result, setResult] = useState('0');

  const addCalculate = () => {
    setResult(parseInt(number1) + parseInt(number2));
  }

  return (
    <div className='container'>
        <h1>Hello Number Calculator</h1>
        <div>
          <input type = 'number' placeholder='' onChange={(e) => setNumber1(e.target.value)}></input>
          <input type = 'number' placeholder='' onChange={(e) => setNumber2(e.target.value)}></input>
        </div>
        <button onClick={addCalculate}>Add</button>
        <h1>Result: {result} </h1>
    </div>
  )
}

export default Calculate