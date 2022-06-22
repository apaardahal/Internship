import React, { useContext, useState } from 'react'
import {  useNavigate } from "react-router-dom"
import { FormContext } from '../../context/FormContext'

import './basicInfo.css'

function BasicInfo() {

    const navigate = useNavigate()

    const[fname, setFname] = useState('')
    const[lastname, setLastname] = useState('')
    const[age, setAge] = useState('');

    const {setUserData} = useContext(FormContext)
    
    const clearData = () => {
    setFname('')
    setAge('')
    setLastname('')
}

const submitData = () => {
    setUserData(
        {fname, lastname, age}
        )
    navigate('/table')
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
                    <button className='submit' onClick = {submitData}>Submit</button>
                </div>
                <div className='button'>
                    <button className='submit' onClick = {clearData}>Clear</button>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default BasicInfo