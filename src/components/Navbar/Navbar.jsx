import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    
    <nav className='container'>
        <h1><span>Mukhetwa</span>Saloon</h1>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Abou Us</li>
            <li>Catalog</li>
            <li>Booking</li>
            <li><button className='btn '>Contact</button></li>
        </ul>    
    </nav>
  )
}

export default Navbar
