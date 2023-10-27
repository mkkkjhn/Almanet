import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebase = {
    apiKey: 'AIzaSyDmsBd8CgOkExENrm-LwJYm-LjzflfTeyU',
    authDomain: 'almanet-18ca7.firebaseapp.com',
    projectId: 'almanet-18ca7',
    storageBucket: 'almanet-18ca7.appspot.com',
    messagingSenderId: '313009027412',
    appId: '1:313009027412:web:7b478985b87639849ab0c1',
    measurementId: 'G-CRLNEX76L9'
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebase) : getApps()[0];
const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };
