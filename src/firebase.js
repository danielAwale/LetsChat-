import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDS4e0Zuq7wi01SrvoYzX9QGhBOIduWUSk",
  authDomain: "letz-chat-f66c9.firebaseapp.com",
  projectId: "letz-chat-f66c9",
  storageBucket: "letz-chat-f66c9.appspot.com",
  messagingSenderId: "953333288597",
  appId: "1:953333288597:web:74dd321fff5834d9ae959c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);