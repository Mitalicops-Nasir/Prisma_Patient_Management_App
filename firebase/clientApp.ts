import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwozBAUBaI5a66HAzUOx3MDP4qveZqNIo",
  authDomain: "patient-management-app-e30ae.firebaseapp.com",
  projectId: "patient-management-app-e30ae",
  storageBucket: "patient-management-app-e30ae.appspot.com",
  messagingSenderId: "86902898161",
  appId: "1:86902898161:web:ce8fbf4cb50d0efe725850",
  measurementId: "G-Y5HXQLGX9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
