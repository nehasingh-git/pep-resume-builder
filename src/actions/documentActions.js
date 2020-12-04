import * as actionTypes from './actionTypes';
import axios from 'axios';
const { v4: uuidv4 } = require('uuid');
 

// export const setSkinCd= (skinCd)=> {
//     return function (dispatch) {
//             return  axios.post("http://localhost:3003/api/resume/", {
//                 data: {
//                     name: 'test',
//                     skinCd: skinCd
//                 }
//             }) .then(response => {

//                 console.log(response)
//                 dispatch({ type: actionTypes.SET_SKIN, document: { skinCd: skinCd, id: response.data.id, createdDate: new Date() } })
//             })
//             .catch(error => {
//                 dispatch({ type: actionTypes.SET_SKIN, document: {  } })
//             });
//         }

// }


export const setSkinCd = (skinCd) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let id = uuidv4();
            let createdDate = new Date();
            await firestore.collection('resumes').doc(id).set({ "document": { "skinCd": skinCd, "createdDate": createdDate } })
            await dispatch({ type: actionTypes.SET_SKIN, document: { skinCd: skinCd, id: id, createdDate: createdDate } })
        } catch (error) {
            dispatch({ type: actionTypes.SET_SKIN_ERROR, error: error })
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


export const setFontFamily = (documentId,fontFamily) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let modifiedDate = new Date();
            await firestore.collection('resumes').doc(documentId).set({ "document": { "fontFamily": fontFamily, "modifiedDate": modifiedDate } },{merge:true})
            await dispatch({ type: actionTypes.UPDATE_FONT_FAMILY, document: { fontFamily: fontFamily, modifiedDate: modifiedDate } })
        } catch (error) {
            console.log(error)
        }
    }
}

export const setFontSize =  (documentId,fontSize) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let modifiedDate = new Date();
            await firestore.collection('resumes').doc(documentId).set({ "document": { "fontSize": fontSize, "modifiedDate": modifiedDate } },{merge:true})
            await dispatch({ type: actionTypes.UPDATE_FONT_SIZE, document: { fontSize: fontSize, modifiedDate: modifiedDate } })
        } catch (error) {
            console.log(error)
        }
    }
}
export const setColor =  (documentId,color) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        try {
            const firestore = getFirestore();
            let modifiedDate = new Date();
            await firestore.collection('resumes').doc(documentId).set({ "document": { "color": color, "modifiedDate": modifiedDate } },{merge:true})
            await dispatch({ type: actionTypes.UPDATE_COLOR, document: { color: color, modifiedDate: modifiedDate } })
        } catch (error) {
            console.log(error)
        }
    }
}





// export function updateSkinCd(skinCd){
//     return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
// }