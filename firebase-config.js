// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCYc-4Lv3ajBkGP35-mJrwQ9i5s3A5Ybk8",
  authDomain: "bloodconnect-5ade4.firebaseapp.com",
  projectId: "bloodconnect-5ade4",
  storageBucket: "bloodconnect-5ade4.firebasestorage.app",
  messagingSenderId: "1028389992416",
  appId: "1:1028389992416:web:6781ccd1e4a63bf47b9d85",
  measurementId: "G-BC25VPFV2H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);


// Export
export { auth, db };
