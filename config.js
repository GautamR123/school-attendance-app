import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB4GtQ-DsdYLle6JndTzcl7Ua4Hbog3gHs",
    authDomain: "attendance-38f39.firebaseapp.com",
    databaseURL: "https://attendance-38f39-default-rtdb.firebaseio.com",
    projectId: "attendance-38f39",
    storageBucket: "attendance-38f39.appspot.com",
    messagingSenderId: "728235436093",
    appId: "1:728235436093:web:81a7600c64ee6ed3d9a254"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default  firebase.database();