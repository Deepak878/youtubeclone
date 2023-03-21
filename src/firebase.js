import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHWRjAePZvUkszniiclguqxk4MaXe2EZM",
  authDomain: "clone-b2753.firebaseapp.com",
  projectId: "clone-b2753",
  storageBucket: "clone-b2753.appspot.com",
  messagingSenderId: "253771515968",
  appId: "1:253771515968:web:d2c423c457e1616377f7a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
