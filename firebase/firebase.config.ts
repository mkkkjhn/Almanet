import { initializeApp, getApps } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
    apiKey: 'AIzaSyDmsBd8CgOkExENrm-LwJYm-LjzflfTeyU',
    authDomain: 'almanet-18ca7.firebaseapp.com',
    projectId: 'almanet-18ca7',
    storageBucket: 'almanet-18ca7.appspot.com',
    messagingSenderId: '313009027412',
    appId: '1:313009027412:web:7b478985b87639849ab0c1',
    measurementId: 'G-CRLNEX76L9'
};

// Initialize Firebase
const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;
