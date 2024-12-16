import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

function Header() {
  return (
<header>
    <div className="container py-3">
    <Navbar expand="lg" >
      <Navbar.Brand href="/" className="logo"> <span>New Generation</span> Innovator</Navbar.Brand>
      <NavbarToggle arial-controls="basic-navbar-nav"/>
      <NavbarCollapse id="basic-navbar-nav"> 
        <Nav className ="ms-auto">
            <NavLink className="nav-link"href="/">Accueil</NavLink>
            <NavLink className="nav-link"href="/about">A propos</NavLink>
            <NavLink className="nav-link"href="/services">Services</NavLink>
            <NavLink className="nav-link"href="/contact">Contact </NavLink>
   
         </Nav>
         </NavbarCollapse>
    
    </Navbar>
      
    </div>
</header>
  )
}

export default Header
