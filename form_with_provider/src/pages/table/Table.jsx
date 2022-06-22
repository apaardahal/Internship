import React from 'react'
import { useContext } from 'react'
import {FormContext} from '../../context/FormContext'
import './table.css'

function Table() {

const [userData, setUserData] = useContext(FormContext)

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
                        <td>{userData.fname !== '' ? userData.fname : ''}</td>
                        <td>{userData.lastname !== '' ? userData.lastname : ''}</td>
                        <td>{userData.age !== '' ? userData.age : ''}</td>
                    </tr>
                </tbody>
            </table>
            <button className='table_button'>Clear Data</button>
        </div>
    </div>
  )
}

export default Table