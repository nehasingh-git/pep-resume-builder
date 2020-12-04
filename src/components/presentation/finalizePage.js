import React from "react";

import ResumePreview from './resumePreview'
import {skinCodes, fieldCd,colors, fontFamily,fontSize} from './../../constants/typeCodes';
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
      document:this.props.document,
      showTemplate:false
    }
  }
 
  componentWillMount(){
    // window.scroll(0, 0);//To move window on Top for Mobile Devices
    // if(!this.state.document || !this.state.document.id){
    //   this.props.history.push('/getting-started');
    // }
}


  componentWillReceiveProps(nextProps){
    this.setState({document:nextProps.document});
  }

  onChange = (skinCd) => {
    this.props.documentActions.updateSkinCd(this.state.document.id, skinCd);          
  }

  onFontFamilyChange = (font) => {
    this.props.documentActions.setFontFamily(this.state.document.id, font);          
  }
  onFontSizeChange = (font) => {
    this.props.documentActions.setFontSize(this.state.document.id, font);          
  }

  onColorChange = (color) => {
    this.props.documentActions.setColor(this.state.document.id, color);          
  }
  showChangeTemplate=()=>{
    this.setState({showTemplate:!this.state.showTemplate});
  }
  downloadResume=()=> {
    const input = document.getElementById('resumePreview');
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
  }

  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container full finalize-page" >
        <div className="funnel-section ">
            <div className="finalize-preview-card " id="resumePreview">
              <ResumePreview contactSection={contactSection} educationSection={educationSection} document={this.state.document}></ResumePreview>   
            </div>
            <div className="finalize-settings center">            

               
                <div className=" download-resume resume-options">
                  <p className="no-margin" >
                    Download Resume As PdF
                  </p>
                      <a  onClick={()=>this.downloadResume()}  >download Resume</a>
               </div>
              

              <div className="divider"></div>
              <div className=" resume-options">
                   <p className="no-margin" >
                    Change Font Family
                  </p>
                  <div className="item-picker-container">
                    {
                      fontFamily.map((value,index) => {
                        return (
                          <div onClick={()=>this.onFontFamilyChange(value)} className={value + " font-family-picker "}><p>{value}</p></div>

                        )

                      })
                    }
                   </div>
              </div>

              <div className="divider"></div>
              <div className=" resume-options">
                 <p className="no-margin" >
                    Change Font Size
                  </p>
                  <div className="item-picker-container">
                    {
                      fontSize.map((value,index) => {
                        return (
                          <div onClick={()=>this.onFontSizeChange(value)} className={value + " font-picker "}><p>{value}</p></div>

                        )

                      })
                    }
                   </div>

              </div>

              <div className="divider"></div>
              <div className=" resume-options">
                   <p >
                    Change Color
                  </p>
              <div className="item-picker-container">
                  {
                    colors.map((value,index) => {
                      return (
                        <div onClick={()=>this.onColorChange(value)} className={value + " color-picker "}></div>

                      )

                    })
                  }
                  </div>
              </div>
              <div className="divider"></div>
              <div className=" download-resume resume-options">
                  <p >
                    Change Template
                  </p>
                      <button type="button" onClick={()=>this.showChangeTemplate()}  className='btn hvr-float-shadow'>Change Template</button>
               </div>
           </div>
        </div>
        <div className={" choose-skin-container section  "+ (this.state.showTemplate?"":"hide")}>
          <h1>Choose Template <i className="fa fa-times i-close"  onClick={()=>this.showChangeTemplate()}></i></h1>

            <div className="styleTemplate  ">           
                {
                  skinCodes.map((value, index) => {
                  return( <div className="template-card rounded-border finalize">

                    <i className={this.state.document.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                    <img className={this.state.document.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
                    <button className="btn-select-theme" onClick={()=>this.onChange(value)} type='button'>USE TEMPLATE</button>
                  </div>);
                  })
                }

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
