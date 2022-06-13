import React from 'react'
import './personal.css'

function Personal() {
  return (
    <div className='main_container'>
        <div className='input_items'>
            <div className='input_item'>
                <input type = "text" className='input' placeholder='First Name'></input>
            </div>
            <div className='input_item'>
                <input type = "text" className='input' placeholder='Last Name'></input>
            </div>
            <div className='input_item'>
                <input type = "number" className='input' placeholder='Age'></input>
            </div>
            <div className='button'>
                <button className='submit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Personal