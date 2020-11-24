import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBbKf2LpHA-FNqrwdx0Fljr4kY2WZzOdWc",
    authDomain: "leslo-648dc.firebaseapp.com",
    databaseURL: "https://leslo-648dc.firebaseio.com",
    projectId: "leslo-648dc",
    storageBucket: "leslo-648dc.appspot.com",
    messagingSenderId: "1070035591214",
    appId: "1:1070035591214:web:6b7737e9349bc7a0607fbf",
    measurementId: "G-EX9ZD1NQ35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}
