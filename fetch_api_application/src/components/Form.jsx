import React, { useEffect, useState } from 'react'
import './form.css'
import {Api} from '../api'

function Form() {

    const [firstName, setFastName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')

    const updateData = () => {
        const ob_api = new Api();
        ob_api.save(firstName, lastName, age);
    }

    const deleteData = () => {
        const ob_api = new Api()
        ob_api.delete()
    }

    const getData =  () => {
        const ob_api = new Api()
        const info =   ob_api.get();
        return info;
    }

    useEffect(() =>{
        const u_info = getData()
        setFastName(u_info.firstName)
        setLastName(u_info.lastName)
        setAge(u_info.age)
       // setFastName("Apaar")
    },[])

  return (
    <div className='main_container'>
        <div className='left_main_container'>
            <div className='input_items'>
                    <div className='input_item'>
                        <input type = "text" name = "firstname" value={firstName ? firstName : ""} onChange = {(e) => setFastName(e.target.value)} className='input'  placeholder='First Name'></input>
                    </div>
                    <div className='input_item'>
                        <input type = "text" name = "lastname" value = {lastName ? lastName : ""} onChange = {(e) => setLastName(e.target.value)} className='input'  placeholder='Last Name'></input>
                    </div>
                    <div className='input_item'>
                        <input type = "number" name = "age" value = {age ? age : ""} onChange = {(e) => setAge(e.target.value)} className='input'  placeholder='Age'></input>
                    </div>
                    <div className='button'>
                        <button className='submit' onClick={updateData}>Save</button>
                    </div>
                    <div className='button'>
                        <button className='submit' onClick={deleteData}>Clear</button>
                    </div>
                </div>
            <div/>
        </div>   
        <div className='right_main_container'>
            <img src='' alt=''/>
        </div> 
    </div>
  )
}

export default Form