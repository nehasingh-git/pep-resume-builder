import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function educationReducer(state= initialState.educationSection, action){
    switch(action.type){
        case actionTypes.ADD_EDUCATION:
           return  update(state,{$set:action.educationSection});
        case actionTypes.UPDATE_EDUCATION:
            return  update(state,{$merge:action.educationSection});
        default:
             return state;
        
    }
}