import './Header.css'
import React from 'react'
import logo from '../../assets/images/logo.png'
import NavItem from '../navItem/NavItem'

const Header = () => {
  return (
    <div className="navbar was-navbar navbar-expand-md ">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} />
      </a>
      <button className="navbar-toggler color-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto ">
          <NavItem >
            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
          </NavItem>
          <NavItem >
            <a className="nav-link text-white" aria-current="page" href="#">Browse</a>
          </NavItem>
          <NavItem >
            <a className="nav-link text-white" aria-current="page" href="#">Details</a>
          </NavItem>
          <NavItem >
            <a className="nav-link text-white" aria-current="page" href="#">Streams</a>
          </NavItem>  
          <NavItem >
            <a className="nav-link text-white" aria-current="page" href="#">Profil</a>
          </NavItem>     
        </ul>
        
      </div>
    </div>
  </div>
  )
}

export default Header