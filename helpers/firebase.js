// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIgQ2sBbDRdwOwd0fZr41Hylrn8dynnaU",
  authDomain: "image-bucket-5a096.firebaseapp.com",
  projectId: "image-bucket-5a096",
  storageBucket: "image-bucket-5a096.appspot.com",
  messagingSenderId: "857102479764",
  appId: "1:857102479764:web:494598a3188e864b375f81",
  measurementId: "G-BXQGE3MRLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
