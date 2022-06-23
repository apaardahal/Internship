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

            console.log(fname);

            setLastname(data.lastName)

            // To get the previous value(Updated value)
            // setLastname((previousLname) => {
            //     console.log(previousLname);
            // })

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

// function getNewData () {
//     return Promise.resolve('Resolve')
// }



// function getData ()
// {

//     let callback = (resolve, reject) => {
//         resolve('Resolved')
//     }

//     let value = new  myPromise(callback)

//     return value;
// }

// // Throws ann error becauses resolve function is not defined. Calling undefined is an error.
// let a = 3;
// a.resolve = function (args) {
//     return args;
// }

// let b = 'Apaar';
// b.resolve()

// let c = true;
// c.resolve()

// let d = {}
// d.resolve()

// let e = [] 
// e.myForEach = function(args){
// }

// e.myForEach((myMap) => {
//     for(let i = 0; i< e.length; i++){
//         myMap(i, e[i])
//     }
// })




// function data (){
// }
// data.resolve()

// function myPromise(callback) {
//     const resolve = (args) => {
//         return args;
//     }
//     callback(resolve);
// }

// myPromise.resolve()

// myPromise()

// myPromise.resolve = function (args) {
//     return args;
// }



export default BasicInfo 