import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBdyxqKRR4KiWjH-bd84mFed_piiRJgPdE",
  authDomain: "react-blog-app-d6ce3.firebaseapp.com",
  databaseURL: "https://react-blog-app-d6ce3.firebaseio.com",
  projectId: "react-blog-app-d6ce3",
  storageBucket: "react-blog-app-d6ce3.appspot.com",
  messagingSenderId: "716922577217",
  appId: "1:716922577217:web:881e6e009ff3e040a901c0",
  measurementId: "G-CXWSDWNHV6"
  };
  // Initialize Firebase
  
  const app = firebase.initializeApp(firebaseConfig);
  const rfs  = new ReduxSagaFirebase(app)
  export default rfs

  