import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function contactReducer(state= initialState.contactSection, action){
    switch(action.type){
        case actionTypes.ADD_CONTACT:
           return  update(state,{contactSection:{$set:action.contactSection}});
        default:
             return state;
        
    }
}