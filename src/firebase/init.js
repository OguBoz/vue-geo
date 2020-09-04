import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBKGsRmqT4GPMk_uC-Rj_6TrF0kc4Rci3c",
    authDomain: "vue-geo-ca798.firebaseapp.com",
    databaseURL: "https://vue-geo-ca798.firebaseio.com",
    projectId: "vue-geo-ca798",
    storageBucket: "vue-geo-ca798.appspot.com",
    messagingSenderId: "41026347598",
    appId: "1:41026347598:web:6008abdf6279e8178a991f"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()