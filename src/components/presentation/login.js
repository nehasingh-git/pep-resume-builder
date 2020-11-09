import React from "react";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions';

  class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              errorMessage: this.props.auth?this.props.auth.ErrorMessage:'',
              auth:{}
          };       
    }
 
    onChange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        this.setState({...this.state, auth:{...this.state.auth, [key]:val}});
    }
    onSubmit=()=>{
      
       this.props.authActions.signIn(this.state.auth)
        this.props.history.push('/contact');
    }

  render() { 
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Enter Login details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={this.state.auth.email}  onChange={this.onChange}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={this.state.auth.password} onChange={this.onChange}/><span></span>
                            </div>
                        </div>

                        <div className="input-group full">
                                <span className="error-message" >{this.state.errorMessage}</span> 
                        </div>
                        
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Login</button>
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


const mapDispatchToProps=(dispatch)=>{
  return{
     authActions:bindActionCreators(authActions, dispatch)
  }
}

  export default connect(mapStateToProps,mapDispatchToProps)(Login)