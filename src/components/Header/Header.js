import './Header.css'
import React from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="navbar navbar-expand-md   bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src={logo} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white " aria-current="page" href="#">Browse</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Details</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Streams</a>
          </li>   
          <li className="nav-item">
            <a className="nav-link text-white" aria-current="page" href="#">Profil</a>
          </li>     
        </ul>
        <form className="d-flex">
          <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Header