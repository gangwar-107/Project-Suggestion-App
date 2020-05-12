import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBqM6YMxd_8tVVeI3j8P8KZit103dfawbs",
    authDomain: "project-suggestion-app.firebaseapp.com",
    databaseURL: "https://project-suggestion-app.firebaseio.com",
    projectId: "project-suggestion-app",
    storageBucket: "project-suggestion-app.appspot.com",
    messagingSenderId: "158481965215",
    appId: "1:158481965215:web:13db4fbf37fb234f5cc2aa",
    measurementId: "G-KM6QQPR5WM"
  };
  // Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase