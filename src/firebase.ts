import * as firebase from 'firebase/app';
import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvqgnOf18uORMb1xmnceIcrc8egBl5cSw",
    authDomain: "daily-moments-410ec.firebaseapp.com",
    projectId: "daily-moments-410ec",
    storageBucket: "daily-moments-410ec.firebasestorage.app",
    messagingSenderId: "397792013464",
    appId: "1:397792013464:web:eee6597d1caf3dc5e5f4ed"
  };

const app = firebase.initializeApp(firebaseConfig);

const auth: Auth = getAuth(app);

export {
    auth,
    signInWithEmailAndPassword
};