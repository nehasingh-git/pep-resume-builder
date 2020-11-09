import React from "react";
import {NavLink} from "react-router-dom";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
import * as contactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';


import ResumePreview from './resumePreview'
import { connect } from "react-redux";

  class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              contactSection: this.props.contactSection,
              document: this.props.document
          };       
   }

   componentWillMount(){
       if(!this.state.document || !this.state.document.id){
         this.props.history.push('/getting-started');
       }
   }
 
   onChange=(event)=>{
        var key =event.target.name;
        var val =event.target.value;
        this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    }
    onSubmit=()=>{
        // database call

        if(this.state.contactSection  && this.state.contactSection.id){
            this.props.contactActions.update(this.state.document.id, this.state.contactSection);
        }
        else{
            this.props.contactActions.add(this.state.document.id, this.state.contactSection);
        }

        this.props.history.push('/education');
    }


    getFieldData=(key)=>{
        if(this.state.contactSection && this.state.contactSection[key]){
          return this.state.contactSection[key]
        }
        return "";
    }

    render() { 
    let {contactSection} = this.state;
    let {getFieldData} = this;
    
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)}  onChange={this.onChange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={getFieldData(fieldCd.LastName)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}   value={getFieldData(fieldCd.ProfSummary)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email}  value={getFieldData(fieldCd.Email)}  onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone}   value={getFieldData(fieldCd.Phone)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession}  value={getFieldData(fieldCd.Profession)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}   value={getFieldData(fieldCd.Street)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City}  value={getFieldData(fieldCd.City)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State}  value={getFieldData(fieldCd.State)}  onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country}  value={getFieldData(fieldCd.Country)}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode}  value={getFieldData(fieldCd.ZipCode)}  onChange={this.onChange}/><span></span>
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
                    <ResumePreview contactSection={this.state.contactSection} skinCd={this.state.document.skinCd}></ResumePreview>
                </div>

            </div>
        </div>
    );
  }
}

 
const mapStateToProps=(state)=>{
  return {
      contactSection:state.contactSection,
      document:state.document
  }
}


const mapDispatchToProps=(dispatch)=>{
    return{
       contactActions:bindActionCreators(contactActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact)

