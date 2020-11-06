import React from "react";
import {NavLink} from "react-router-dom";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";

  class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              errorMessage: '',
              email:'',
              password:'',
              confirmPassword:''
          };       
    }
 
  onChange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
       // this.setState(update([key],{$set, val}));
    }
    onSubmit=()=>{
        // database call
        this.props.history.push('/');
    }

  render() { 
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={this.state.email}  onChange={this.onChange}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={this.state.password} onChange={this.onChange}/><span></span>
                            </div>
                        </div>
                        <div className="input-group full"><label>Confirm Password</label>
                            <div className="effect"><input  type="password" name="password"  value={this.state.confirmPassword} onChange={this.onChange}/><span></span>
                            </div>
                        </div>

                        <div className="input-group full">
                                <span className="error-message" >{this.state.errorMessage}</span> 
                        </div>
                        
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}


 
const mapStateToProps=(state)=>{
  return {
      auth:state.auth
  }
}

  export default connect(mapStateToProps,null)(Register)