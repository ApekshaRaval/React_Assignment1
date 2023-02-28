import React from 'react'
import Logo1 from '../Assets/logo-1 1.svg'
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
<header>
    <div>
    <img src ={Logo1} className=''/>
    </div>
    <nav>
        {/* <ul>
        <li><NavLink>About Us</NavLink></li>
        <li> <NavLink>Services</NavLink></li>
        <li><NavLink>Team</NavLink></li>
        <li><NavLink>Clients</NavLink></li>
        <li></li><NavLink>Contact Us</NavLink>
        </ul> */}
     <ul className=''>
        <li>About Us</li>
        <li> Services</li>
        <li>Team</li>
        <li>Clients</li>
        <li>Contact Us</li>
        </ul>
        
    </nav>
  
</header>
  )
}

export default NavBar
