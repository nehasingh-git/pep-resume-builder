import * as actionTypes from './actionTypes';

export function add(contactSection){
    return {type: actionTypes.ADD_CONTACT, contactSection : contactSection}
}


export function update(contactSection){
    return {type: actionTypes.UPDATE_CONTACT, contactSection : contactSection}
}


export const add=(documentId, contactSection)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        
        let docId = uuidv4(); 
        let createdDate = new Date();
        // firestore.collection('resumes').add({"document":{"id":docId, "skinCd":skinCd,"createdDate": createdDate}}).then(()=>
        //     dispatch({type: actionTypes.SET_SKIN, document:{skinCd : skinCd,id: docId, createdDate:createdDate}})
        // ).catch((error)=>
        //     dispatch({type: actionTypes.SET_SKIN, skinCd : 'skin2'})
        // )      
    }   
}
 
// export function setSkinCd(skinCd){
//     return {type: actionTypes.SET_SKIN, skinCd : skinCd}
// }


export const update=(documentId, contactSection)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        
        let modifiedDate = new Date();
        firestore.collection('resumes').doc(documentId)
        .set({
            "skinCd":skinCd,
            "modifiedDate": modifiedDate
        }, { merge: true })      
        
        .then(()=>
            dispatch({type: actionTypes.UPDATE_SKIN, document:{skinCd : skinCd, modifiedDate:modifiedDate}})
        ).catch((error)=>
            dispatch({type: actionTypes.UPDATE_SKIN_ERROR, error : error})
        )      
    }   
}

