import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
 import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import config from './config'
const reduxStore = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(config) // redux bindings for firestore
  )
);




// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';
 
// const firebaseConfig = { 
//         apiKey: "AIzaSyD3WovTd1W6osCZzx-EU8IST3NGtPBUUrI",
//       authDomain: "pep-resume-api1.firebaseapp.com",
//       databaseURL: "https://pep-resume-api1.firebaseio.com",
//       projectId: "pep-resume-api1",
//       storageBucket: "pep-resume-api1.appspot.com",
//       messagingSenderId: "1015571652091",
//       appId: "1:1015571652091:web:3cca0bb1c4c77ddba9bf5e"
// }; // from Firebase Console
// const rfConfig = {}; // optional redux-firestore Config Options
 
// // Initialize firebase instance
// firebase.initializeApp(firebaseConfig);
// // Initialize Cloud Firestore through Firebase
// firebase.firestore();
 
// // Add reduxFirestore store enhancer to store creator
// const createStoreWithFirebase = compose(
//   reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
// )(createStore);
 
// // Add Firebase to reducers
// // const rootReducer = combineReducers({
// //   firestore: firestoreReducer,
// // });
 
// // Create store with reducers and initial state
// const initialState = {};
// const store = createStoreWithFirebase(rootReducer, initialState);



// const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={reduxStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);