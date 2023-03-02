// import React from 'react'
// import Logo1 from '../Assets/logo-1 1.svg'
// import {NavLink} from "react-router-dom"

// const NavBar = () => {
//   return (
// <header>
//     <div>
//     <img src ={Logo1} className=''/>
//     </div>
//     <nav>
//         {/* <ul>
//         <li><NavLink>About Us</NavLink></li>
//         <li> <NavLink>Services</NavLink></li>
//         <li><NavLink>Team</NavLink></li>
//         <li><NavLink>Clients</NavLink></li>
//         <li></li><NavLink>Contact Us</NavLink>
//         </ul> */}
//      {/* <ul className=''>
//         <li><a>About Us</a></li>
//         <li> <a>Services</a></li>
//         <li><a>Team</a></li>
//         <li><a>Clients</a></li>
//         <li><a>Contact Us</a></li>
//         </ul> */}
        
//     </nav>
  
// </header>
//   )
// }

// export default NavBar


// import React from 'react'
// import Logo1 from '../Assets/logo-1 1.svg'
// import "./scss/NavBar.scss"

// const NavBar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light ">
//   <div className="container-fluid">
//   <img src ={Logo1} className='logo' alt='Logo'/>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse mr-0" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-right">
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="#">About Us</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Services</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Clients</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact Us</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//   )
// }

// export default NavBar

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from '../Assets/logo-1 1.svg'
import "./scss/NavBar.scss"

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
      <img src ={Logo1} className='logo' alt='Logo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Clients</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
