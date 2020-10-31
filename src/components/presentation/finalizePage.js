import React from "react";
import { NavLink } from 'react-router-dom';

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'

class Finalize extends React.Component {

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
  }
  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med education" >
        <div className="section ">
            <div className="finalize-preview-card ">
              <ResumePreview contactSection={contactSection} educationSection={educationSection}></ResumePreview>   
            </div>
        </div>
      </div>
    );
  }
}

  
export default  Finalize

