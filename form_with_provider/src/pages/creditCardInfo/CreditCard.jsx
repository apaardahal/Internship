import React, { useState } from 'react'
import FormContext from '../../context/FormContext'
import { useContext } from 'react'
import './creditCard.css'

function Creditcard() {

    const [result, setDisplayResult] = useState(false)

    const { displayFormResult} = useContext(FormContext)

    const[cardnumber, setCardnumber] = useState('')
    const[name, setName] = useState('')
    const[security, setSecurity] = useState('')

    
    const clearData = () => {
        setCardnumber('')
        setName('')
        setSecurity('')
        setDisplayResult(false)
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
                    <input type = "number" className='input' value = {security !== '' ? security : ''} placeholder='Security Code' onChange={(e) => setSecurity(e.target.value)}></input>
                </div>
                <div className='button'>
                    <button className='submit' onClick={displayFormResult}>Submit</button>
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
                <h1 className='output'>Security Number: {security}</h1>
            </div>
            :null
            }       
        </div>
    </div>
  )
}

export default Creditcard


