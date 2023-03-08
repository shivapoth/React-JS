// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdHs_oUT94TvBftmSj4JVTnKUgnLzQNvk",
    authDomain: "fir-application-ef840.firebaseapp.com",
    projectId: "fir-application-ef840",
    storageBucket: "fir-application-ef840.appspot.com",
    messagingSenderId: "843413833108",
    appId: "1:843413833108:web:0c56d4fe62f30e8f06bb81",
    measurementId: "G-XCFZF6K20S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export default db;