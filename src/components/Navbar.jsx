import React from 'react'
import '../css/Navbar.css';

function Navbar() {
    return (
        <div>
        <div
        className='nav'>
           <img className='nav-img' src="/images/brand_logo.png" alt="" />
            <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">Contact</li>
            <li href="#">About</li>
                
            </ul>

           <button className='nav-btn'>Login</button>

        </div>
        </div>
  )
}

export default Navbar
