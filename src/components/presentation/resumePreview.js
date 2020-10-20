import React from 'react';

class ResumePreview extends React.PureComponent{
    
    render() {     
        
        return (
            <div className="resume-preview">
                <p> Resume Preview</p>
                <p> {this.props.name} </p>
            </div>
        )
    }
}
 
export default ResumePreview;