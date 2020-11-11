import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

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


const reduxStore = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase) // redux bindings for firestore,
    
  )
);



ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);