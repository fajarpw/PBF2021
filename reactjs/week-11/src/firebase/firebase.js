import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg3Xybc0-1igawujrpJ_-mUxXuuYmwO3s",
    authDomain: "week-11-73fd5.firebaseapp.com",
    projectId: "week-11-73fd5",
    storageBucket: "week-11-73fd5.appspot.com",
    messagingSenderId: "17393865174",
    appId: "1:17393865174:web:afccb04aaf67fdbed19477",
    measurementId: "G-SN087ZSTZS"
}

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDB = myFirebase.firestore()
export const db = baseDB