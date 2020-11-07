import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';


export default function authReducer(state= initialState.auth, action){
    switch(action.type){
        case actionTypes.SIGN_IN:
           console.log(action.data)
         return  update(state,{ErrorMessage:{$set:''}}); 
      case actionTypes.SIGN_IN_FAILED:
           return  update(state,{ErrorMessage:{$set:action.error}});
     
        default:
             return state;
        
    }
}