import { useContext } from 'react'
import {FormContext} from '../../context/FormContext'
import {  useNavigate } from "react-router-dom"
import './table.css'

import ApiRequest from '../../api';
const Api = ApiRequest()

function Table() {

const navigate = useNavigate()

const {userData, setUserData} = useContext(FormContext)

const deleteData = async () => {
    try{
        if(userData.fname !== '' || userData.lastname !== '' || userData.age !== ''){
            const data = await Api.delete()
            if(data === 'success'){
                alert('Deleted Successfully')
                navigate("/")
            }else{
                alert('Falied to delete')
            }
        }else{
            alert('No Data to Delete!!')
        }
    }
    catch(err){
        console.log(err)
    }
  setUserData({fname: '', lastname: '', age: ''})
}

  return (
    <div>
        <div className="table_container">
            <table>
                <thead>    
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{userData.fname  ? userData.fname : ''}</td>
                        <td>{userData.lastname ? userData.lastname : ''}</td>
                        <td>{userData.age  ? userData.age : ''}</td>
                    </tr>
                </tbody>
            </table>
            <button className='table_button' onClick={deleteData}>Clear Data</button>
        </div>
    </div>
  )
}

export default Table