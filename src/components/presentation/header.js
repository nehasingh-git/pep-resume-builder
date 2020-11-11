import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import {connect} from 'react-redux';

function LoggedIn(auth) {
  let uid =auth.auth.uid;
  return (

        <ul>
            <li className="signin ">
              <NavLink className="  " to="/register">
               Logged in as {uid}
              </NavLink>
            </li>
            <li className="signin"> 
              <NavLink className="text-blue btnv-3" to="/login">
             Signout
              </NavLink>         
            </li>
          </ul>
  )

}

function LoggesOut(props) {
  return (
    <ul>
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
  )
}

const header = (props) => {

  const { auth } = props;
  // console.log(auth);


  return (  
  <header className="header">
  <nav className="nav">
      <a href="/" className="holder-logo">
        <img className='logo' src={logo}></img>
      </a> 
        <div className="header-links full-height">

        {auth && auth.uid ?<LoggedIn auth={auth}></LoggedIn>:<LoggesOut></LoggesOut>}
          
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
    </nav>
  </header>

  );
};

const mapStateToProps=(state)=>{
  return{
     auth: state.firebase.auth
  }
}
export default connect(mapStateToProps,null)(header);
