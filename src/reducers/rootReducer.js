import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';  
import authReducer from './authReducer';  
import documentReducer from './documentReducer';  
import {combineReducers} from  'redux';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase:firebaseReducer,
  auth:authReducer,
  contactSection:contactReducer,
  educationSection:educationReducer,
  document:documentReducer
})

export default rootReducer;