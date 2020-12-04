import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

export default function documentReducer(state= initialState.document, action){
    switch(action.type){

        case actionTypes.SET_SKIN:
           return  update(state,{$set:action.document});
           case actionTypes.SET_SKIN_ERROR:
            return  update(state,{error:{$set:action.error}});   
        case actionTypes.UPDATE_SKIN:
            return  update(state,{$merge:action.document});


        case actionTypes.UPDATE_COLOR:
            return  update(state,{$merge:action.document});
        case actionTypes.UPDATE_FONT_SIZE:
            return  update(state,{$merge:action.document});
        case actionTypes.UPDATE_FONT_FAMILY:
            return  update(state,{$merge:action.document});
        default:
             return state;
        
    }
}