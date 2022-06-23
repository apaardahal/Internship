import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom"
import { FormContext } from '../../context/FormContext'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './basicInfo.css'

import ApiRequest from '../../api';
const Api = ApiRequest()

function BasicInfo() {

    const navigate = useNavigate()

    const[fname, setFname] = useState('')
    const[lastname, setLastname] = useState('')
    const[age, setAge] = useState('');
    const [loading, setLoading] = useState(false)

    const {setUserData} = useContext(FormContext)

    const getData = async () => {
        try{
           const data = await Api.get()
            setFname(data.firstName)
            setLastname(data.lastName)
            setAge(data.age)
            setLoading(true)
        }
        catch(err){
            console.log(err);
        }
    }

    const submitData = async () => {
        setUserData(
            {fname, lastname, age}
            )
            try{
                const data = await Api.save(fname, lastname, age)
                if(data === 'success'){
                    alert('Saved Successfully')
                    navigate('/table')
                }else{
                    alert('Can not saved')
                }   
            }
            catch(err){
                console.log(err);
            }     

    } 

    useEffect(() => {
        getData();
    }, [])

  return (
      <>
      {loading ? <div className='main_container'>
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
            </div>
        </div>

    </div>
    :<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
    </Backdrop>}
</>
  )
}

export default BasicInfo