import React from 'react'

function Creditcard() {
  return (
    <div className='main_container'>
        <div className='input_items'>
            <div className='input_item'>
                <input type = "number" className='input' placeholder='Card Number'></input>
            </div>
            <div className='input_item'>
                <input type = "text" className='input' placeholder='Name on Card'></input>
            </div>
            <div className='input_item'>
                <input type = "date" className='input' placeholder='Expiry Date'></input>
            </div>
            <div className='input_item'>
                <input type = "number" className='input' placeholder='Security Code'></input>
            </div>
            <div className='button'>
                <button className='submit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Creditcard