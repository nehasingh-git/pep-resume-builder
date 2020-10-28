import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'

class Education extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: {},
      contactSection: {}
    }
  }

  onChange = (event) => {
    this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
  }

  onSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={this.onChange} value={educationSection[fieldCd.SchoolName]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={this.onChange} value={educationSection[fieldCd.Degree]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationCGPA]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={this.onChange} value={educationSection[fieldCd.City]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationDate]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={this.onChange} value={educationSection[fieldCd.GraduationYear]} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={this.onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview skinCd={"skin1"} contactSection={contactSection} educationSection={educationSection}></ResumePreview>
            
          </div>
        </div>
      </div>
    );
  }
}

  
export default  Education

