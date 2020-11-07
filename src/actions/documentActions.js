import * as actionTypes from './actionTypes';

export const setSkinCd=(skinCd)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{

        const firestore = getFirestore();
        firestore.collection('resumes').add({"document":{"id":"1234", "skinCd":skinCd,"createdAt":new Date(), userId:1 }}).then(()=>
            dispatch({type: actionTypes.SET_SKIN, skinCd : skinCd})
        ).catch((error)=>
            dispatch({type: actionTypes.SET_SKIN, skinCd : 'skin2'})
        )      
    }
   
}
 

// export function setSkinCd(skinCd){

//     return(dispatch, getState )=>{
//         return {type: actionTypes.SET_SKIN, skinCd : skinCd}
//     }
    
// }

export function updateSkinCd(skinCd){
    return {type: actionTypes.UPDATE_SKIN, skinCd : skinCd}
}