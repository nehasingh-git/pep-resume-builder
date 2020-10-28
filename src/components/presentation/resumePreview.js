import React from 'react';
import {skinCodes, fieldCd} from './../../constants/typeCodes'


class ResumePreview extends React.PureComponent{
    
    render() {    
        
      var  {contactSection, educationSection } = this.props;
      var name = contactSection[fieldCd.FirstName]+ ' ' + contactSection[fieldCd.LastName];

        return (
            <div className={"resume-preview " +this.props.skinCd}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {name} </p>
                    <p className={'center address'}>{contactSection[fieldCd.Street]+', ' +contactSection[fieldCd.City] + ', ' + contactSection[fieldCd.State]+ ', ' + contactSection[fieldCd.Country]+ ', ' + contactSection[fieldCd.ZipCode]}</p>
                    <p className={'center'}>{contactSection[fieldCd.Email]}</p>
                    <p className={'center'}>{contactSection[fieldCd.Phone]}</p>
                </div>
                <div className={'educationSection text-upper'}>
                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p> {educationSection[fieldCd.SchoolName]}</p>
                </div>
          
            </div>
        )
    }
}
 
export default ResumePreview;