import firebase from 'firebase/app';

import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
   apiKey: "AIzaSyDf1tjUxaQbKxVaGE2b05kDGzuB6oGgwow",
   authDomain: "crwn-db-733fa.firebaseapp.com",
   databaseURL: "https://crwn-db-733fa.firebaseio.com",
   projectId: "crwn-db-733fa",
   storageBucket: "crwn-db-733fa.appspot.com",
   messagingSenderId: "542179428736",
   appId: "1:542179428736:web:1521be000bbb8ab2775965"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters( {prompt: 'select_account'} );
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;