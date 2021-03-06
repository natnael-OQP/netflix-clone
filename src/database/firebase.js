import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0J7rMyMdAk2zizrjuf352Z52j0fmRS94",
    authDomain: "netflix-clone-with-nathan.firebaseapp.com",
    projectId: "netflix-clone-with-nathan",
    storageBucket: "netflix-clone-with-nathan.appspot.com",
    messagingSenderId: "597773272580",
    appId: "1:597773272580:web:0c8df66cce7a7c42775751"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider()