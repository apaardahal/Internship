import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './form.css'
import {Api} from '../api'

function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [loading, setLoading] = useState(false)

    const updateData = () => {
        const ob_api = new Api();
        ob_api.save(firstName, lastName, age);
        setLoading(true)
        alert('Data Saved')
    }

    const deleteData = () => {
        const ob_api = new Api()
        ob_api.delete()
        setFirstName('')
        setLastName('')
        setAge('')
        setLoading(true)
    }

    const getData =  async () => {
        try{
            const ob_api = new Api()
            const info =   await ob_api.get();
            setFirstName(info.firstName)
            setLastName(info.lastName)
            setAge(info.age)
            setLoading(true)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        getData()
    },[])

  return (
    <>
    { loading ? <div className='main_container'>
        <div className='left_main_container'>
            <div className='input_items'>
                    <div className='input_item'>
                        <input type = "text" name = "firstname" value={firstName? firstName : ""} onChange = {(e) => setFirstName(e.target.value)} className='input'  placeholder='First Name'></input>
                    </div>
                    <div className='input_item'>
                        <input type = "text" name = "lastname" value = {lastName? lastName : ""} onChange = {(e) => setLastName(e.target.value)} className='input'  placeholder='Last Name'></input>
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
    :<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
    </Backdrop>}
</>
  )
}

export default Form