
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-c9b72.firebaseapp.com",
  projectId: "examnotes-c9b72",
  storageBucket: "examnotes-c9b72.firebasestorage.app",
  messagingSenderId: "18657349883",
  appId: "1:18657349883:web:ca2d80af3449bbaf2a605e",
  measurementId: "G-3KGC1EQPY2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };