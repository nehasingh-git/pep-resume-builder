import * as actionTypes from './actionTypes';

export function add(contactSection){
    return {type: actionTypes.ADD_CONTACT, contactSection : contactSection}
}


export function update(contactSection){
    return {type: actionTypes.UPDATE_CONTACT, contactSection : contactSection}
}