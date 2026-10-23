import React from 'react'
import {Link} from 'react-router-dom'
import '../navbarStyle/navbar.css'
function Navbar() {
  return (
    <>
    <div>
         <ul className='navbar'>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/home'>HomePage</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
         </ul>
    </div>
    </>
  )
}

export default Navbar
