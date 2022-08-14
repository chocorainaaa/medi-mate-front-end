// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzrWiH_wehV_4QQnqgXHlHQ_gHaKV9U3c",
  authDomain: "medimate-91beb.firebaseapp.com",
  projectId: "medimate-91beb",
  storageBucket: "medimate-91beb.appspot.com",
  messagingSenderId: "662305892755",
  appId: "1:662305892755:web:6183ec76c413ea8c09e066",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
