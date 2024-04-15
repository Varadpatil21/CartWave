
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyArSE5QYdrAbk7wRO4Q-Axes9a9ytouY6o",
    authDomain: "auth-developement-7d558.firebaseapp.com",
    projectId: "auth-developement-7d558",
    storageBucket: "auth-developement-7d558.appspot.com",
    messagingSenderId: "924973255659",
    appId: "1:924973255659:web:563e337a068108899427ae"
});

const auth = getAuth(app);

export { auth, app as default };
