import React from "react";
import {NavLink} from 'react-router-dom';
const Education = () => {
        return (    
            <div className="container med education">
            <div className="section funnel-section">
              <div className="form-card">        
                <h2 className="form-heading center">Educational Details</h2>
                <div className="form-section">
                  <div className="input-group"><label>College Name</label>
                    <div className="effect"><input  type="text" name="SCHO" /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Degree</label>
                    <div className="effect"><input  type="text" name="DGRE"  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>CGPA</label>
                    <div className="effect"><input  type="text" name="GRCG"  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
        
                  <div className="input-group"><label>City/State</label>
                    <div className="effect"><input type="text" name="CITY"  /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>
                
                  <div className="input-group"><label>Graduation Month</label>
                    <div className="effect"><input  type="text" name="GRDT" /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>

                  <div className="input-group"><label>Graduation Year</label>
                    <div className="effect"><input  type="text" name="GRYR"   /><span></span>
                    </div>
                    <div className="error"></div>
                  </div>      

                  <div className="form-buttons">
                    <button className="btn hvr-float-shadow" type='button'>Next</button>
                    <NavLink to='/finalize' className="center">Back</NavLink>
                </div>
                </div>            
              </div>
              <div className="preview-card">        
              </div>      
            </div>
          </div>
            );
}
export default Education

