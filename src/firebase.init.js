// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAswJGruoDmOVi3pdJb_3yGWrcL8xPQ0kE",
    authDomain: "car-warehouse-54fc4.firebaseapp.com",
    projectId: "car-warehouse-54fc4",
    storageBucket: "car-warehouse-54fc4.appspot.com",
    messagingSenderId: "319987559527",
    appId: "1:319987559527:web:dadf97b2adb777c2bab8c2"
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;