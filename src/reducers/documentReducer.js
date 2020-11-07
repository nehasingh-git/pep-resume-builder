import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function documentReducer(state= initialState.document, action){
    switch(action.type){
        case actionTypes.SET_SKIN:
           return  update(state,{skinCd:{$set:action.skinCd}});
        default:
             return state;
        
    }
}