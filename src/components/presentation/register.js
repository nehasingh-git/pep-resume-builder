import React from "react";
import {NavLink} from "react-router-dom";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';

  class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              auth:{}
          };       
    }
 
    onChange=(event)=>{
      var key =event.target.name;
      var val =event.target.value;
      this.setState({...this.state, auth:{...this.state.auth, [key]:val}});
  }
  onSubmit=()=>{
    
     this.props.authActions.register({email:this.state.auth.email, password:this.state.auth.password})
     this.props.history.push('/login');
  }

  render() { 
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                  <p>{this.state.auth.errormessage}</p>
                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={this.state.auth.email}  onChange={this.onChange}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={this.state.auth.password} onChange={this.onChange}/><span></span>
                            </div>
                        </div>
                        <div className="input-group full"><label>Confirm Password</label>
                            <div className="effect"><input  type="password" name="password"  value={this.state.auth.confirmPassword} onChange={this.onChange}/><span></span>
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
      auth:state.auth,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
     authActions:bindActionCreators(authActions, dispatch)
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Register)