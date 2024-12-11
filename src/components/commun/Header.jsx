import React from 'react'
import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from "react-bootstrap";

function Header() {
  return (
<header>
    <div className="container py-3">
    <Navbar expand="lg" >
      <Navbar.Brand href="/" className="logo"> <span>UrbanEdge</span>  Constructions </Navbar.Brand>
      <NavbarToggle arial-controls="basic-navbar-nav"/>
      <NavbarCollapse id="basic-navbar-nav"> 
        <Nav className ="ms-auto">
            <NavLink className="nav-link"href="/">Home</NavLink>
            <NavLink className="nav-link"href="/about">About us</NavLink>
            <NavLink className="nav-link"href="/services">Services</NavLink>
            <NavLink className="nav-link"href="/projects">Projets</NavLink>
            <NavLink className="nav-link"href="/blogs">Blog</NavLink>
            <NavLink className="nav-link"href="/contact">Contact us</NavLink>
            <NavLink className="nav-link"href="/adminlogin">Contact us</NavLink>
         </Nav>
         </NavbarCollapse>
    
    </Navbar>
      
    </div>
</header>
  )
}

export default Header
