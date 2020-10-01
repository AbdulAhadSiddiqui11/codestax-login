// This file is used to connect our application to the firebase
import firebase from 'firebase';
import firebaseConfig from './FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
