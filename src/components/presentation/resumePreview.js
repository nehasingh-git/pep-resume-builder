import React from 'react';
import {fieldCd} from './../../constants/typeCodes'


class ResumePreview extends React.PureComponent{

    rvContact=(key, valToAppend)=>{
        if(this.props.contactSection){
          return this.props.contactSection[key]?this.props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    rvEducation=(key, valToAppend)=>{
        if(this.props.educationSection){
          return this.props.educationSection[key]?this.props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    render() {    
        let {rvContact, rvEducation} = this;
        return (
            <div className={this.props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rvContact(fieldCd.Email ) }</p>
                    <p className={'center'}>{rvContact(fieldCd.Phone) } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.SchoolName)}</p>
                     <p>{rvEducation(fieldCd.Degree)}</p>
                     <p>{rvEducation(fieldCd.City)}</p>
                     <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p>{rvEducation(fieldCd.GraduationDate)}</p>
                     <p>{rvEducation(fieldCd.GraduationYear)}</p>
                </div>
          
            </div>
        )
    }
}
 
export default ResumePreview;