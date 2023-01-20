import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCtjPjgXC5Wd9Wip7ATwx2UfTJ2pTVrgQQ",
    authDomain: "chat-app-g-e2cff.firebaseapp.com",
    projectId: "chat-app-g-e2cff",
    storageBucket: "chat-app-g-e2cff.appspot.com",
    messagingSenderId: "1012241640174",
    appId: "1:1012241640174:web:ed7f16328ffe0ef9dda1ff"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const colref = collection(db, 'users');

  const auth = getAuth();

  const storage = getStorage();


  export {db, auth, colref, storage};
