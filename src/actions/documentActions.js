import * as actionTypes from './actionTypes';
const { v4: uuidv4 } = require('uuid');
 

export const setSkinCd = (skinCd) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let id = uuidv4();
            let createdDate = new Date();
            await firestore.collection('resumes').doc(id).set({ "document": { "skinCd": skinCd, "createdDate": createdDate } })
            await dispatch({ type: actionTypes.SET_SKIN, document: { skinCd: skinCd, id: id, createdDate: createdDate } })
        } catch (error) {
            dispatch({ type: actionTypes.SET_SKIN, skinCd: 'skin2' })
        }
    }
}

export const updateSkinCd = (documentId, skinCd) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let modifiedDate = new Date();
            await firestore.collection('resumes').doc(documentId).set({ "document": { "skinCd": skinCd, "modifiedDate": modifiedDate } },{merge:true})
            await dispatch({ type: actionTypes.UPDATE_SKIN, document: { skinCd: skinCd, modifiedDate: modifiedDate } })
        } catch (error) {
            console.log(error)
        }
    }
}


// export function updateSkinCd(skinCd){
//     return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
// }