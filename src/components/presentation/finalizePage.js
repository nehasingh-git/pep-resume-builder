import React from "react";

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import { connect } from 'react-redux'

class Finalize extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: this.props.educationSection,
      contactSection:this.props.contactSection,
      skinCd:this.props.skinCd
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
      <div className="container med finalize-page" >
        <div className="funnel-section ">
            <div className="finalize-preview-card ">
              <ResumePreview contactSection={contactSection} educationSection={educationSection}></ResumePreview>   
            </div>
            <div className="finalize-settings">
          <div className="section">
            <h1 className=" center">
              Select a resume template to get started</h1>
            <p className=" center">
              You’ll be able to edit and change this template later!
            </p>
            <div className="styleTemplate ">
              {
              skinCodes.map((value, index) => {
              return( <div className="template-card rounded-border">

                <i className={this.state.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                <img className={this.state.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
                <button className="btn-select-theme" onClick={()=>this.onChange(value)} type='button'>USE TEMPLATE</button>
              </div>);
              })
        }
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
      contactSection:state.contactSection,
      educationSection:state.educationSection,
      skinCd:state.document.skinCd
  }
}

export default connect(mapStateToProps,null)(Finalize)
