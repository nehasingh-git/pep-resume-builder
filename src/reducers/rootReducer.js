import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function rootReducer(state= initialState, action){
    switch(action.type){
        case actionTypes.SET_SKIN:
           return  update(state,{document:{skinCd:{$set:action.skinCd}}});
      case actionTypes.ADD_EDUCATION:
           return  update(state,{educationSection:{$set:action.educationSection}});
      case actionTypes.ADD_CONTACT:
         return  update(state,{contactSection:{$set:action.contactSection}});
        default:
             return state;
        
    }
}