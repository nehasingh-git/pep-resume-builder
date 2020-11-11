import React from "react";

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
import * as documentActions from '../../actions/documentActions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas'


class Finalize extends React.Component {

  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: this.props.educationSection,
      contactSection:this.props.contactSection,
      document:this.props.document
    }
  }

  componentWillMount(){

  }
  
  componentWillReceiveProps(nextProps){
    this.setState({document:nextProps.document});
  }

  onChange = (skinCd) => {
    this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);          
  }

  
  downloadPdf=()=> {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
      }).catch(function(error){
        console.log(error)
      })
    ;
  }
  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med finalize-page" >
        <div className="funnel-section ">
            <div className="finalize-preview-card ">
              <ResumePreview contactSection={contactSection} educationSection={educationSection} skinCd={this.state.document.skinCd}></ResumePreview>   
            </div>
            <div className="finalize-settings">
          <div className="section">
            <h1 className=" center">
              Select a resume template to get started</h1>
            <p className=" center">
              You’ll be able to edit and change this template later!
            </p>
            <div className="styleTemplate ">
            <button type="button" onClick={()=>this.downloadPdf()}  className='btn-select-theme'>download Resume</button>
              {
              skinCodes.map((value, index) => {
              return( <div className="template-card rounded-border">

                <i className={this.state.document.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                <img className={this.state.document.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
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
      document:state.document
  }
}

const mapDispatchToProps=(dispatch)=>{
      return{
          
         documentActions:bindActionCreators(documentActions, dispatch)
      }
}
    

export default connect(mapStateToProps,mapDispatchToProps)(Finalize)
