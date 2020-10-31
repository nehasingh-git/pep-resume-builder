import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'

class Education extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: 
        {
        SCHO: "Netaji Subhas University of Technology ",
        GRCG: "7.7", 
        GRDT: "Jan",
        CITY: "Pitampura",
        DGRE: "B.Tech(IT)",
        GRYR: "2021"

      },
      contactSection: {
        FNAM: "Neha", LNAM: "Singh",
        EMAI: "test@mailinator.com", 
        PHON: "24325436",
        STRT: "kd14",
        CITY: "Pitampura",
        CNTY: "India",
        EMAI: "test@mailinator.com",
        PRSU:"A resume format is the layout of your resume.  The ideal resume format usually depends on how much work experience you have.   But what happens when you have none?  For a no-experience resume, we reco",
        FNAM: "Neha",
        LNAM: "Singh",
        PHON: "24325436",
        STAT: "Delhi",
        STRT: "kd14",
        ZIPC: "110034"
      }
    }
  }

  onChange = (event) => {
    this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
  }

  onSubmit = (e) => {
   console.log(this.state.educationSection);
   this.props.history.push('/finalize')
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
            <ResumePreview contactSection={contactSection} educationSection={educationSection}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }
}

  
export default  Education

