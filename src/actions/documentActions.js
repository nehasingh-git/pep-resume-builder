import * as actionTypes from './actionTypes';

export function setSkinCd(skinCd){
    return {type: actionTypes.SET_SKIN, skinCd : skinCd}
}

export function updateSkinCd(skinCd){
    return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
}