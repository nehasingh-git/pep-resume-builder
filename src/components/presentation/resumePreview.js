import React from 'react';
import {fieldCd} from './../../constants/typeCodes'


class ResumePreview extends React.PureComponent{

    rv=(section , key, valToAppend)=>{
        if(section){
          return section[key]? section[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

     

    

    render(props) {  
       
        let {rv} = this;
        let {contactSection, educationSection,document}=this.props;

        var name =rv(contactSection, fieldCd.FirstName) +' '+ rv(contactSection, fieldCd.LastName);
        var street =rv(contactSection, fieldCd.Street);
        var city =rv(contactSection, fieldCd.City);
        var state =   rv(contactSection, fieldCd.State);
        var country = rv(contactSection, fieldCd.Country);
        var zip = rv(contactSection, fieldCd.ZipCode);
        
        var School  =rv(educationSection, fieldCd.SchoolName);
        var Degree  =rv(educationSection, fieldCd.Degree);
        var GraduationCGPA  =rv(educationSection, fieldCd.GraduationCGPA);
        var GraduationYear  =rv(educationSection, fieldCd.GraduationYear);
        var City  =rv(educationSection, fieldCd.City);
        var GraduationDate  =rv(educationSection, fieldCd.GraduationDate);

        return (
            <div className="resume-preview ">
                <div className={ document.skinCd == 'skin1'? 'skin1': 'hide'}>

                    <div className={'name-section'}>
                        <p className={'center contact-name text-upper ' +(document.color?document.color:"teal")+"-text"}> {rv(contactSection,  fieldCd.FirstName,' ')  + rv(contactSection,  fieldCd.LastName)}  </p>
                        <p className={'center address'}>{rv(contactSection,  fieldCd.City,', ') + rv(contactSection,  fieldCd.State,', ') +  rv(contactSection,  fieldCd.Country,', ') + rv(contactSection,  fieldCd.ZipCode,', ')}</p>
                        <p className={'center'}>{rv(contactSection,  fieldCd.Email ) }</p>
                        <p className={'center'}>{rv(contactSection,  fieldCd.Phone) } </p>
                    </div>

                    <div className={'profSummSection text-upper'}>                   
                        <p className={"heading bold " +(document.color?document.color:"teal")+"-text"}>PROFESSIONAL SUMMARY</p>
                        <div className={'divider'}></div>
                        <p>{rv(contactSection,  fieldCd.ProfSummary)}</p>
                    </div>

                    <div className={'educationSection text-upper'}>                   
                        <p className={"heading bold " +(document.color?document.color:"teal")+"-text"}>EDUCATIONAL DETAILS</p>
                        <div className={'divider'}></div>
                        <p>{rv(educationSection,  fieldCd.SchoolName)}</p>
                        <p>{rv(educationSection,  fieldCd.Degree)}</p>
                        <p>{rv(educationSection,  fieldCd.City)}</p>
                        <p>{rv(educationSection,  fieldCd.GraduationCGPA)}</p>
                        <p>{rv(educationSection,  fieldCd.GraduationDate)}</p>
                        <p>{rv(educationSection,  fieldCd.GraduationYear)}</p>
                    </div>
                </div>

                <div className={document.skinCd == 'skin2'?'skin2':'hide'}>
                <div className="resume-header">
                    <div className="name-profession left">
                    <h3 className={"resume-name upper no-margin "+ (document.color?document.color:"teal")+"-text"} >{name ? name: ''}</h3>
                    <h4 className="resume-summary no-margin">{rv(contactSection, fieldCd.Profession)}</h4>
                    </div>
                    <div className="contact-details right">         
                    <p> {rv(contactSection, fieldCd.Email)}</p>
                    <p>  {rv(contactSection, fieldCd.Phone)}</p>
                    <p>{street?street:''}  {city?', ' + city:""} {state? ', ' +state:''} {country? ', ' + country:''} {zip? ', '+zip:''}</p>
                    </div>
                </div>
                <div className="prf-summary">
                    <p>{rv(contactSection, fieldCd.ProfSummary)}  </p>
                </div>
                <div className="details">
                    <div className="detail-section">
                    <p className={"heading-underline bold  upper " +(document.color?document.color:"teal")+"-text"}>
                    Educational Details
                    </p>
                    <p> {School?'School '+ School: ''}</p>
                    <p> {Degree?'Degree '+ Degree: ''}</p>
                    <p> {GraduationCGPA? 'GraduationCGPA'+ GraduationCGPA:''}</p>
                    <p> {GraduationYear?'GraduationYear '+ GraduationYear: ''}</p>
                    <p> {City?'City/State '+ City: ''}</p>
                    <p> {GraduationDate?'Graduation Year '+ GraduationDate: ''}</p>    
                    </div>
                    <div className="detail-section">
                    <p className={"heading-underline upper upper "+(document.color?document.color:"teal")+"-text"}>
                    Skills
                    </p>          
                    </div>
                </div>
           </div>
          
            </div>
        )
    }
}
 
export default ResumePreview;