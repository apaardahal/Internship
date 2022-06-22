import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom"
import { FormContext } from '../../context/FormContext'
import {Api} from '../../api';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './basicInfo.css'

function BasicInfo() {

    const navigate = useNavigate()

    const[fname, setFname] = useState('')
    const[lastname, setLastname] = useState('')
    const[age, setAge] = useState('');
    const [loading, setLoading] = useState(false)

    const {setUserData} = useContext(FormContext)

    const saveDataInLocalStorage = () => {
        const data_obj = new Api();
        data_obj.save(fname, lastname, age)
        alert("Data Saved Successfully")
    }
    
    const getData = async () => {
        try{
            const ob_api = new Api()
            const info =   await ob_api.get();
            setFname(info.firstName)
            setLastname(info.lastName)
            setAge(info.age)
            setLoading(true)
        }
        catch(err){
            console.log(err);
        }
    }

    const submitData = () => {
        setUserData(
            {fname, lastname, age}
            )
        saveDataInLocalStorage()
        navigate('/table')
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