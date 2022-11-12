import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {
    getFirestore,

} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAh8-YZ1PKKocAFKJJmI72uCxz3zvixSro",
    authDomain: "ameer-s-hackathon.firebaseapp.com",
    projectId: "ameer-s-hackathon",
    storageBucket: "ameer-s-hackathon.appspot.com",
    messagingSenderId: "252930303233",
    appId: "1:252930303233:web:6af92171c445cb16cce700",
    measurementId: "G-4ST11Z3LS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



const login = () => {
    const email = document.getElementById("useremail");
    const password = document.getElementById("userpassword");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user", user);
            window.location.href = "student.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
};

const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", login);