// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7LCEtqwoAC-VJ3MQqtxBZUXJbiWCTUc0",
  authDomain: "mymovieapp-e55f1.firebaseapp.com",
  projectId: "mymovieapp-e55f1",
  storageBucket: "mymovieapp-e55f1.firebasestorage.app",
  messagingSenderId: "949402398262",
  appId: "1:949402398262:web:476ab8ef0b05fdf257b297",
  measurementId: "G-8GS4SX40VP",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
