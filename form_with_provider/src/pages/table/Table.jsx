import { useContext } from 'react'
import {FormContext} from '../../context/FormContext'
import './table.css'
import {Api} from '../../api';

function Table() {

const {userData} = useContext(FormContext)

const deleteData = () => {
    const api_obj = new Api()
    api_obj.delete()
    console.log(userData.setFname)
    userData.fname = ''
    userData.lastname = ''
    userData.age = ''
    alert("Successfully deleted")
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