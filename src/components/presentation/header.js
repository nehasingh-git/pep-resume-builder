import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (  
  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <span className="logo"></span>
      </a> 
      <div   className="full-height">
        <div className="full-height">
          <ul  >
            <li className="signup ">
              <NavLink className=" btnv-1" to="/register">
               Register
              </NavLink>
            </li>
            <li className="signin"> 
              <NavLink className="text-blue btnv-3" to="/login">
              Sign In
              </NavLink>         
            </li>
          </ul>
          <ul id="nav-mid">
            <li>
            <NavLink className="btn-nvt-gm" to="/resume-templates">
            Resume Templates
            </NavLink>
            </li> 
            <li className="holder-pricing">            
              <NavLink className="btn-nvt-gm" to="/about-us">
              About Us
              </NavLink>
            </li>        
          </ul>
            
      </div>   
      </div>
    </nav>
  </header>

  );
};
export default header;
