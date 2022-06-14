import React, { useState } from 'react'
import './creditcard.css'

function Creditcard() {

    const[cardnumber, setCardnumber] = useState('')
    const[name, setName] = useState('')
    const[date, setDate] = useState('')
    const[security, setSecurity] = useState('')
    const[result, setResult] = useState(false)
    
    const clearData = () => {
        setCardnumber('')
        setName('')
        setDate('')
        setSecurity(false)
    }

  return (
      <div className='main_container'>
        <div className='left_main_container'>
            <div className='input_items'>
                <div className='input_item'>
                    <input type = "number" className='input' value = {cardnumber !== '' ? cardnumber : ''} placeholder='Card Number' onChange={(e) => setCardnumber(e.target.value) }></input>
                </div>
                <div className='input_item'>
                    <input type = "text" className='input' value = {name !== '' ? name : ''} placeholder='Name on Card' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='input_item'>
                    <input type = "date" className='input' value = {date !== '' ? date : ''} placeholder='Expiry Date' onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className='input_item'>
                    <input type = "number" className='input' value = {security !== '' ? security : ''} placeholder='Security Code' onChange={(e) => setSecurity(e.target.value)}></input>
                </div>
                <div className='button'>
                    <button className='submit' onClick={() => setResult(true)}>Submit</button>
                </div>
                <div className='button'>
                    <button className='submit' onClick = {clearData}>Clear</button>
                </div>
            </div>
        </div>
        <div className='right_main_container'>
            {
            result?
            <div className='output'>
                <h1 className='output'>Card Number: {cardnumber}</h1>
                <h1 className='output'>Name on card : {name}</h1>
                <h1 className='output'>Date: {date}</h1>
                <h1 className='output'>Security Number: {security}</h1>
            </div>
            :null
            }
            
        </div>
    </div>
  )
}

export default Creditcard