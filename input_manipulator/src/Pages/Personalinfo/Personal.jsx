import React, { useState } from 'react'
import './personal.css'

function Personal() {

    const[fname, setFname] = useState('')
    const[lastname, setLastname] = useState('')
    const[age, setAge] = useState('');
    const[displayresult, setDisplayResult] = useState(false)
    
    const clearData = () => {
    setFname('')
    setAge('')
    setLastname('')
    setDisplayResult(false)
}
  return (
      <>
      <div className='main_container'>
        <div className='left_main_container'>
            <div className='input_items'>
                <div className='input_item'>
                    <input type = "text" className='input' value = {fname !== '' ? fname : ''} placeholder='First Name' onChange={(e) => setFname(e.target.value)}></input>
                </div>
                <div className='input_item'>
                    <input type = "text" className='input' value = {lastname !== '' ? lastname : ''} placeholder='Last Name' onChange={(e) => setLastname(e.target.value)}></input>
                </div>
                <div className='input_item'>
                    <input type = "number" className='input' value = {age !== '' ? age : ''} placeholder='Age' onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='button'>
                    <button className='submit' onClick = {() => setDisplayResult(true)}>Submit</button>
                </div>
                <div className='button'>
                    <button className='submit' onClick = {clearData}>Clear</button>
                </div>
            </div>
        </div>
        <div className='right_main_container'>
            {
                displayresult?
                    <h1 className='output'>Hello my name is {fname} {lastname}. I am {age} years old.</h1>
                :null
            }
        </div>
    </div>
</>
  )
}

export default Personal