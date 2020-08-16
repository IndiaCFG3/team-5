import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKP1ZMXWGgwKrJcTreIneNB2tBdNeZqxQ",
    authDomain: "carpe-meraki.firebaseapp.com",
    databaseURL: "https://carpe-meraki.firebaseio.com",
    projectId: "carpe-meraki",
    storageBucket: "carpe-meraki.appspot.com",
    messagingSenderId: "283962667843",
    appId: "1:283962667843:web:13a39eed775fbafe3e35f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
