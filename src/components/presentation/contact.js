import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'

import {fieldCd, skinCodes}  from '../../constants/typeCodes';

import ResumePreview from './resumePreview'

  class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
                educationSection: {},
                contactSection: {},
                skinCd:'skin1'
          };      
    }
    
    onChange=(event)=>{
        this.setState({contactSection:{...this.state.contactSection, [event.target.name]: event.target.value}})
    }
    onSubmit=()=>{
       this.props.history.push('/education')
    }


  render() { 
    const { contactSection ,educationSection} = this.state
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName}
                                    onChange={this.onChange}  value={contactSection[fieldCd.FirstName]}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  onChange={this.onChange} value={contactSection[fieldCd.LastName]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary} onChange={this.onChange} value={contactSection[fieldCd.ProfSummary]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email} onChange={this.onChange}  value={contactSection[fieldCd.Email]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone} onChange={this.onChange}  value={contactSection[fieldCd.Phone]}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession} onChange={this.onChange}  value={contactSection[fieldCd.Profession]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street} onChange={this.onChange}  value={contactSection[fieldCd.Street]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City} onChange={this.onChange}   value={contactSection[fieldCd.City]}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State} onChange={this.onChange}  value={contactSection[fieldCd.State]} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country} onChange={this.onChange}  value={contactSection[fieldCd.Country]}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode} onChange={this.onChange}   value={contactSection[fieldCd.ZipCode]}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/education' className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview skinCd={skinCodes[0]} contactSection={contactSection} educationSection={educationSection}></ResumePreview>
                </div>

            </div>
        </div>
    );
  }
}
 
  export default Contact