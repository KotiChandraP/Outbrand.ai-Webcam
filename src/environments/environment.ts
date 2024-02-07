// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
    production: false,
    firebaseConfig:{

        apiKey: "AIzaSyB70xaYQx7CKBa6qEYu4mwnNXJhxbaMVdM",
        authDomain: "webcam-recorder-75bd1.firebaseapp.com",
        databaseURL: "https://webcam-recorder-75bd1-default-rtdb.firebaseio.com",
        projectId: "webcam-recorder-75bd1",
        storageBucket: "webcam-recorder-75bd1.appspot.com",
        messagingSenderId: "652026217586",
        appId: "1:652026217586:web:5fe159a1709ef147ddaeeb",
        measurementId: "G-DC2EKY4PJW"
    }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);