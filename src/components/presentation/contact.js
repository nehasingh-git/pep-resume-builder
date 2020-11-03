import React from "react";
import {NavLink} from "react-router-dom";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'
import { connect } from "react-redux";

  class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              contactSection: this.props.contactSection,
              skinCd: this.props.skinCd
          };       
    }
 
  onChange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    }
 onSubmit=()=>{
    // database call
    this.props.history.push('/education');
 }

  render() { 
    let {contactSection} = this.state;
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={contactSection[fieldCd.FirstName]}  onChange={this.onChange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={contactSection[fieldCd.LastName]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={contactSection[fieldCd.ProfSummary]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={contactSection[fieldCd.Email]} onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={contactSection[fieldCd.Phone]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={contactSection[fieldCd.Profession]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={contactSection[fieldCd.Street]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={contactSection[fieldCd.City]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={contactSection[fieldCd.State]} onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={contactSection[fieldCd.Country]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={contactSection[fieldCd.ZipCode]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={this.state.contactSection} ></ResumePreview>
                </div>

            </div>
        </div>
    );
  }
}


 
const mapStateToProps=(state)=>{
  return {
      contactSection:state.contactSection,
      skinCd:state.document.skinCd
  }
}

  export default connect(mapStateToProps,null)(Contact)