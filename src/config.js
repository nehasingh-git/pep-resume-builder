import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyD3WovTd1W6osCZzx-EU8IST3NGtPBUUrI",
    authDomain: "pep-resume-api1.firebaseapp.com",
    databaseURL: "https://pep-resume-api1.firebaseio.com",
    projectId: "pep-resume-api1",
    storageBucket: "pep-resume-api1.appspot.com",
    messagingSenderId: "1015571652091",
    appId: "1:1015571652091:web:3cca0bb1c4c77ddba9bf5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
