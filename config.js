import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
    apiKey: "AIzaSyB8R6TFhw2mEilZrtCVPDXugCHtmRMAqXY",
    authDomain: "book-santa-e25f4.firebaseapp.com",
    projectId: "book-santa-e25f4",
    storageBucket: "book-santa-e25f4.appspot.com",
    messagingSenderId: "191639959779",
    appId: "1:191639959779:web:c4f8ed77683a242661edd6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();