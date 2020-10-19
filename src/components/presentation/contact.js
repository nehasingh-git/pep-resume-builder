import React from 'react';
import logo from "../../static/images/resume.png";
import { NavLink } from "react-router-dom";
const Contact = () => {
    return (    
    
        <div className="container med contact-page">          
        <div className="section">
         <h1>
             this is Contact</h1>
         </div>     
         <div class="main-container">
        <div class="form-card">
            <h1> Contact Form</h1> 
            <div class='form-section'>
                <div class='input-group'>
                    < div class="form-heading ">firstname</div>
                    <input  type='text'></input>
                </div>
                <div class='input-group'>
                    < div class="form-heading ">lastname</div>
                    <input  type='text'></input>
                </div>     

                
            </div>
            <div class='form-section'>
                <div class='input-group full'>
                    < div class="form-heading ">firstname</div>
                    <input  type='text'></input>
                </div>
                    

                
            </div>
            <div class='form-section'>
                <div class='input-group'>
                    < div class="form-heading ">Email</div>
                    <input  type='text'></input>
                </div>
                <div class='input-group'>
                    < div class="form-heading ">Phone</div>
                    <input  type='text'></input>
                </div>     

                
            </div>
            <div class='form-section'>
                <div class='input-group'>
                    < div class="form-heading ">Profession</div>
                    <input  type='text'></input>
                </div>
                <div class='input-group'>
                    < div class="form-heading ">Street</div>
                    <input  type='text'></input>
                </div>     

                
            </div>
            <div class='form-section'>
                <div class='input-group'>
                    < div class="form-heading ">City</div>
                    <input  type='text'></input>
                </div>
                <div class='input-group'>
                    < div class="form-heading ">State</div>
                    <input  type='text'></input>
                </div>     

                
            </div>
            <div class='form-section'>
                <div class='input-group'>
                    < div class="form-heading ">Profession</div>
                    <input  type='text'></input>
                </div>
                <div class='input-group'>
                    < div class="form-heading ">Street</div>
                    <input  type='text'></input>
                </div>     

                
            </div>
        </div>
        <div class="side-box"><h1 class="side-box-heading">Educational details</h1></div>
         </div>
            
         </div>
         
        );
}
 
export default Contact;