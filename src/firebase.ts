
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrYaYX9Msx0eGhRQNyK0FiVWaRVUf4Kvs",
  authDomain: "nwitter-reloaded-10ccf.firebaseapp.com",
  projectId: "nwitter-reloaded-10ccf",
  storageBucket: "nwitter-reloaded-10ccf.appspot.com",
  messagingSenderId: "313609071543",
  appId: "1:313609071543:web:757758a589fb4eebf7d632"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);