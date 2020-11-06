import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function rootReducer(state= initialState, action){
y    switch(action.type){
        case actionTypes.SET_SKIN:
           return  update(state,{document:{skinCd:{$set:action.skinCd}}});
        default:
             return state;
        
    }
}