import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import {NavLink} from 'react-router-dom';
 

class GettingStarted extends React.Component{
     constructor(props, context) {
        super(props, context);
        this.state = {
          'name': ''
        };
      }
      onChange = (event) => {
          this.props.history.push('contact');
      }
      render(){
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className="hide" ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={this.onChange}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}
 
export default GettingStarted;

