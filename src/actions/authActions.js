import * as actionTypes from './actionTypes';

export const signIn=(userData)=>{

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.SIGN_IN})
            return;
        }).catch((err) => {
            let message="error in authentication user"
            if(err.code=='auth/user-not-found'){
                message="User not found"
            }
            if(err.code=='auth/wrong-password'){
                message="Incorrect password"
            }
            dispatch({type: actionTypes.SIGN_IN_FAILED,error:message})
        });
    }
}

export const signOut=()=>{

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: actionTypes.SIGN_OUT})
        }).catch((err) => {
            dispatch({type: actionTypes.SIGN_OUT_FAILED,err})
        });
    }
}
export const register=(userData)=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();        
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(() => {
            dispatch({type: actionTypes.REGISTER})
        }).catch((err) => {
            dispatch({type: actionTypes.REGISTER_FAILED,err})
        });
    }
} 
export function signout(){
    return {type: actionTypes.SIGN_OUT}
}