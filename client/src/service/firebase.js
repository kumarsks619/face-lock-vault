import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDv3Vd8z6gnqvcgVFPvy7Pz4W391xUnVsY",
    authDomain: "face-lock-vault.firebaseapp.com",
    projectId: "face-lock-vault",
    storageBucket: "face-lock-vault.appspot.com",
    messagingSenderId: "109182567847",
    appId: "1:109182567847:web:49540e0ddbc7b6dd5f2282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;