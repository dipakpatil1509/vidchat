import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyAGL_fAR26lJmNRqM0jNU7T_g2U2_mYvtg",
    authDomain: "vidchat-7373e.firebaseapp.com",
    projectId: "vidchat-7373e",
    storageBucket: "vidchat-7373e.appspot.com",
    messagingSenderId: "431385375220",
    appId: "1:431385375220:web:2863cac11740beb29b89a1",
    measurementId: "G-VD13LBM835"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics();

export const db = firebase.firestore();