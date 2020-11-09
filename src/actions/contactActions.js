import * as actionTypes from './actionTypes';
const { v4: uuidv4 } = require('uuid');


export const add=(documentId, contactSection)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        contactSection.id = uuidv4(); 
        contactSection.createdDate =new Date();
        firestore.collection('resumes').doc(documentId).set({contactSection:contactSection}).then(()=>
            dispatch({type: actionTypes.ADD_CONTACT, contactSection:contactSection})
        ).catch((error)=>
            dispatch({type: actionTypes.ADD_CONTACT_ERROR, error:error})
        )      
    }   
}
 
export const update=(documentId, contactSection)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        contactSection.modifiedDate =new Date();
        firestore.collection('resumes').doc(documentId).set({contactSection:contactSection}).then(()=>
            dispatch({type: actionTypes.UPDATE_CONTACT, contactSection:contactSection})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_CONTACT_ERROR, error:error})
        )      
    }   
}

