import React from 'react';
import {fieldCd} from './../../constants/typeCodes'


class ResumePreview extends React.PureComponent{
    render() {    

        console.log("Hello");
        return (
            <div className={"resume-preview skin1"}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> Test Name</p>
                    <p className={'center address'}></p>
                    <p className={'center'}></p>
                    <p className={'center'}></p>
                </div>
                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     <p></p>
                </div>
          
            </div>
        )
    }
}
 
export default ResumePreview;