import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
const Navbar = ({user}) =>{
  
    return(
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h2 className="project-Title">hotelVenues</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Hotels">Hotels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SignUp/Login
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/AdminLogin">Admin Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="/UserSignup">User Signup</NavLink></li>
            <li><NavLink className="dropdown-item" to="/UserLogin">User Login</NavLink></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search" style={{alignItems:"center"}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{height:"50px"}}/>
        <button className="btn btn-outline-light me-1" type="submit" style={{height:"50px"}}>Search</button>
        <p className="user"><i class="fa-solid fa-circle-user" style={{fontSize:"30px"}}></i>{user.user}</p>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Navbar;