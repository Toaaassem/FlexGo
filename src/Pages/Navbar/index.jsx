import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import NavLinkcomp from './Navcomp/NavLinkcomp';

let navLinks = [
  { name: "Home", path: "home" },
  { name: "Catalog", path: "movies" },
  { name: "Pricing Plans", path: "pricingplans" },
  { name: "Privacy Policy", path: "privacypolicy" },

];

export default function Navbar({userData , logOut}) { 
  return ( 
<nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#2c2b31" }}>
  <div className="container">
    <div style={{ width: '200px', height: '100%', backgroundColor: '#20282d' , borderRadius: '10px',  }} className="d-flex align-items-center justify-content-center">
      <Link className="navbar-brand" to="home">
        <img src='https://flixgo.volkovdesign.com/main/img/logo.svg' alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Link>
    </div>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
      {localStorage.getItem("token") != null&& (
      <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center flex-grow-1">
        {navLinks.map((link, index) => (
          <NavLinkcomp key={index} link={link} />
        ))}
      </ul>)}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex">
       {localStorage.getItem("token") == null && ( <><li className="nav-item">
          <div style={{ 
            backgroundColor: '#ff568e', 
            border: '1px solid #ff568e', 
            borderRadius: '10px', 
            padding: '5px 10px' 
          }}>
            <Link className="nav-link active" aria-current="page" to="signin" style={{ color: 'white', textDecoration: 'none' }} >
              Sign In
            </Link>
          </div>
        </li>
        <li className="nav-item ms-3">
          <div style={{ 
            backgroundColor: '#ff568e', 
            border: '1px solid #ff568e', 
            borderRadius: '10px', 
            padding: '5px 10px', 
            listStyle : 'none' ,
          }}>
            <Link className="nav-link active" aria-current="page" to="signup" style={{ color: 'white', textDecoration: 'none' }}>
              Sign Up
            </Link>
          </div>
        </li> </>)}
     {localStorage.getItem("token") != null && (<li className="nav-item ms-3" >
          <div style={{ 
            backgroundColor: '#ff568e', 
            border: '1px solid #ff568e', 
            borderRadius: '10px', 
            padding: '5px 10px', 
          }}>
            <Link className="active-link" style={{ color: 'white', textDecoration: 'none' , cursor : "pointer"}} onClick={logOut}>
              LogOut
            </Link>
          </div>
        </li>)}
      </ul>
    </div>
  </div>
</nav>

  );
}
