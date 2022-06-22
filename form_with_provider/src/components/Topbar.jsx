import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'

function Topbar() {
  return (
    <div className='main_bar'>
        <div className='left_side'>
            <h3 className = "logo">Input Manipulator</h3>
        </div>
        <div className='right_side'>
          <ul>
          <li className='links'>
            <Link to ='/' className='nav_bar1'>Personal Information</Link>
          </li>
          <li className='links'>
            <Link to = '/table' className='nav_bar2'>Table</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Topbar