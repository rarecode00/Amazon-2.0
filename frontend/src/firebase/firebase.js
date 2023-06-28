import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDYK6vUuKU7egcpydBN2lVgjFNgUKwdj6E",
    authDomain: "ecommerce-3def5.firebaseapp.com",
    projectId: "ecommerce-3def5",
    storageBucket: "ecommerce-3def5.appspot.com",
    messagingSenderId: "276097883596",
    appId: "1:276097883596:web:79e3fb2c383267bcfa5169",
    measurementId: "G-L05WP6V0N7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref();

export { storage, firebase as default };